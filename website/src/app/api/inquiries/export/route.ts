import { NextResponse } from 'next/server';
import { sendEmail, createBiginContact } from '@/lib/crm';
import { z } from 'zod';

/**
 * Business Logic:
 * This route processes high-value Export Inquiries from international B2B buyers.
 * It expects detailed parameters (container volume, product categories) to score the lead.
 */

const exportInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  company: z.string().min(1, "Company is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  product_categories: z.array(z.string()).min(1, "Select at least one category"),
  volume_estimate: z.string().min(1, "Volume estimate is required"),
  referral_source: z.string().optional(),
  message: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = exportInquirySchema.parse(body);

    // 1. Send Lead to Zoho Bigin
    await createBiginContact({
      Last_Name: validatedData.name,
      Company: validatedData.company,
      Email: validatedData.email,
      Phone: validatedData.phone,
      Country: validatedData.country,
      Description: validatedData.message,
      Lead_Source: "Export Form",
      // These would be custom fields in Zoho:
      // Product_Categories: validatedData.product_categories.join(', '),
      // Volume_Estimate: validatedData.volume_estimate
    });

    // 2. Notify internal team via Brevo
    const adminHtml = `
      <h2>New Export Inquiry</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Company:</strong> ${validatedData.company} (${validatedData.country})</p>
      <p><strong>Volume:</strong> ${validatedData.volume_estimate}</p>
      <p><strong>Categories:</strong> ${validatedData.product_categories.join(', ')}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
      <p><strong>Message:</strong> ${validatedData.message || 'N/A'}</p>
    `;
    await sendEmail({
      to: [{ email: 'export@asiagroup.ng', name: 'Export Team' }],
      subject: `Export Inquiry: ${validatedData.company}`,
      htmlContent: adminHtml
    });

    // 3. Send Auto-reply to user with Company Profile PDF
    const userHtml = `
      <p>Dear ${validatedData.name},</p>
      <p>Thank you for reaching out to Asia Group regarding export partnerships.</p>
      <p>Our international business development team is reviewing your requirements and will be in touch shortly.</p>
      <p>In the meantime, please find our Company Profile attached/linked below.</p>
      <p>Best regards,<br>The Asia Group Team</p>
    `;
    await sendEmail({
      to: [{ email: validatedData.email, name: validatedData.name }],
      subject: "Thank you for your interest in Asia Group",
      htmlContent: userHtml
    });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  } catch (error: any) {
    console.error('Export inquiry error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
