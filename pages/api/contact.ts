import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend'; // Import Resend

// Initialize Resend with API Key from environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
  success?: boolean;
  error?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, company, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  try {
    // Construct HTML content (same as before)
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Website Contact <onboarding@resend.dev>', // Use a verified sender
      to: process.env.EMAIL_TO || 'info@z4biz.com', // Recipient
      reply_to: email, // Set reply-to to the user's email
      subject: `Website Contact Form: ${subject || 'New Message'}`,
      html: htmlContent,
    });

    // Check for Resend API errors
    if (error) {
      console.error('Resend Error:', error);
      return res.status(400).json({ error: 'Failed to send email via Resend.' });
    }

    // Success
    console.log('Resend Success:', data);
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send your message. Please try again later.',
    });
  }
}