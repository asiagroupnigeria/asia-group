import { NextResponse } from 'next/server';
import { sendEmail, createBiginContact } from '@/lib/crm';
import { z } from 'zod';

/**
 * Business Logic:
 * Process general inquiries from the main contact form.
 * Route to 'general@asiagroup.ng'.
 */

const generalInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = generalInquirySchema.parse(body);

    await createBiginContact({
      Last_Name: validatedData.name,
      Company: "Unknown",
      Email: validatedData.email,
      Phone: validatedData.phone,
      Description: validatedData.message,
      Lead_Source: "General Form",
    });

    const adminHtml = `
      <h2>New General Inquiry</h2>
      <p><strong>Name:</strong> ${validatedData.name}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone || 'N/A'}</p>
      <p><strong>Message:</strong> ${validatedData.message}</p>
    `;
    await sendEmail({
      to: [{ email: 'general@asiagroup.ng', name: 'General Enquiries' }],
      subject: `General Inquiry: ${validatedData.name}`,
      htmlContent: adminHtml
    });

    return NextResponse.json({ success: true, message: "Inquiry submitted successfully." });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.errors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
