import type { NextApiRequest, NextApiResponse } from 'next';

// Temporary fix if @types/nodemailer is not installed
// Remove this and install @types/nodemailer in local dev for better type safety
declare module 'nodemailer';
import nodemailer from 'nodemailer';

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
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

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

    const mailOptions = {
      from: process.env.EMAIL_FROM || `"Z4BIZ Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || 'info@z4biz.com',
      replyTo: email,
      subject: `Website Contact Form: ${subject || 'New Message'}`,
      text: `
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
${company ? `Company: ${company}\n` : ''}
${subject ? `Subject: ${subject}\n` : ''}

Message:
${message}
      `,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

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
