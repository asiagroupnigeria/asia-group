import { NextResponse } from 'next/server';
import { sendEmail, createBiginContact } from '@/lib/crm';
import { z } from 'zod';

/**
 * Business Logic:
 * Process investment and strategic partnership inquiries. 
 * Route to 'invest@asiagroup.ng'.
 */

const investmentInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone is required"),
  organization: z.string().optional(),
  interest: z.string().optional(),
  capital_range: z.string().optional(),
  message: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = investmentInquirySchema.parse(body);

    await createBiginContact({
      Last_Name: validatedData.name,
      Company: validatedData.organization || 'Individual',
      Email: validatedData.email,
      Phone: validatedData.phone,
      Description: validatedData.message,
      Lead_Source: "Investment Form",
    });

    const adminHtml = `
      <h2>New Investment Inquiry</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Organization:</strong> ${validatedData.organization || 'N/A'}</p>
      <p><strong>Interest:</strong> ${validatedData.interest || 'N/A'}</p>
      <p><strong>Capital Range:</strong> ${validatedData.capital_range || 'N/A'}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <p><strong>Message:</strong> ${validatedData.message || 'N/A'}</p>
    `;
    await sendEmail({
      to: [{ email: 'invest@asiagroup.ng', name: 'Investment Team' }],
      subject: `Investment Inquiry: ${validatedData.name}`,
      htmlContent: adminHtml
    });

    const userHtml = `
      <p>Dear ${validatedData.name},</p>
      <p>Thank you for your interest in Asia Group. We have received your inquiry and our strategic partnerships team will contact you shortly.</p>
    `;
    await sendEmail({
      to: [{ email: validatedData.email, name: validatedData.name }],
      subject: "Thank you for your interest in Asia Group",
      htmlContent: userHtml
    });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: (error as any).errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
