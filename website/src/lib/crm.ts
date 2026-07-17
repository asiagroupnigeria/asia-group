/**
 * Business Logic:
 * This utility isolates our 3rd-party integrations (Brevo for transactional emails
 * and Zoho for CRM). By keeping this logic separate from the route handlers,
 * we can swap out providers in the future without changing the core API logic.
 */

/**
 * Sends a transactional email using Brevo via REST API.
 */
export async function sendEmail({
  to,
  subject,
  htmlContent,
  senderName = "Asia Group",
  senderEmail = "no-reply@asiagroup.ng"
}: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  senderName?: string;
  senderEmail?: string;
}) {
  if (!process.env.BREVO_API_KEY) {
    console.warn("BREVO_API_KEY is not set. Simulating email send:", subject);
    return true;
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        sender: { name: senderName, email: senderEmail },
        to: to,
        subject: subject,
        htmlContent: htmlContent
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Brevo API Error: ${response.status} ${errorData}`);
    }

    const data = await response.json();
    console.log('Brevo email sent successfully:', data);
    return true;
  } catch (error) {
    console.error('Error sending email via Brevo:', error);
    throw error;
  }
}

/**
 * Submits a new contact/lead to Zoho Bigin.
 * Note: Real Zoho Bigin integration requires OAuth2 tokens. 
 */
export async function createBiginContact(contactData: Record<string, any>) {
  if (!process.env.BIGIN_API_DOMAIN || !process.env.BIGIN_ACCESS_TOKEN) {
    console.warn("Zoho Bigin credentials missing. Simulating contact creation:", contactData);
    return true;
  }

  try {
    const response = await fetch(`https://${process.env.BIGIN_API_DOMAIN}/bigin/v2/Contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Zoho-oauthtoken ${process.env.BIGIN_ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: [contactData]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Zoho Bigin API error: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('Contact created in Zoho Bigin successfully:', data);
    return data;
  } catch (error) {
    console.error('Error creating Zoho Bigin contact:', error);
    throw error;
  }
}
