// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Instantiate Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL || 'info@z4biz.com'; // Use env var or default
const fromEmail = process.env.CONTACT_FORM_SENDER_EMAIL || 'onboarding@resend.dev'; // IMPORTANT: Replace with your verified domain in production

type ResponseData = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { name, phone, email, company, subject, message } = req.body;

  // Basic server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields: name, email, and message.' });
  }

  // Email format validation (optional but good practice)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    // Construct email content
    const emailSubject = subject ? `Contact Form: ${subject}` : `New Contact Form Submission from ${name}`;
    const emailHtmlBody = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <h2>Message:</h2>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: `Z4BIZ Contact Form <${fromEmail}>`, // IMPORTANT: Use a verified domain in production!
      to: [toEmail], // Your receiving email address
      reply_to: email, // Set the reply-to header to the user's email
      subject: emailSubject,
      html: emailHtmlBody,
    });

    // Check for errors from Resend
    if (error) {
      console.error('Resend Error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }

    // Success response
    console.log('Resend Success:', data);
    return res.status(200).json({ message: 'Thank you! Your message has been sent successfully.' });

  } catch (error) {
    console.error('API Route Error:', error);
    // Generic error for unexpected issues
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
    return res.status(500).json({ error: `Server error: ${errorMessage}` });
  }
}