import type { NextApiRequest, NextApiResponse } from 'next';
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
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get form data from request body
  const { name, phone, email, company, subject, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields',
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email address',
    });
  }

  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Format HTML email content
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

    // Set up email data
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

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send your message. Please try again later.',
    });
  }
}