import nodemailer from 'nodemailer';

/**
 * Sends an email using Nodemailer.
 * @param {Object} options - Email options (to, subject, text, html)
 */
const sendEmail = async (options) => {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    // 2) Define the email options
    const mailOptions = {
        from: process.env.EMAIL_FROM || 'Portfolio <noreply@portfolio.com>',
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
    };

    // 3) Actually send the email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`Email sent: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Email could not be sent');
    }
};

/**
 * Generates a clean HTML template for message notifications.
 * @param {Object} data - Message data (name, email, subject, message)
 */
export const generateMessageTemplate = (data) => {
    return `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
            <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 24px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Portfolio Message!</h1>
            </div>
            <div style="padding: 32px; color: #1e293b;">
                <p style="margin-top: 0;">You have received a new message from your portfolio website contact form.</p>
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 24px 0;">
                    <p style="margin: 0 0 12px 0;"><strong>From:</strong> ${data.name} (&lt;${data.email}&gt;)</p>
                    <p style="margin: 0 0 12px 0;"><strong>Subject:</strong> ${data.subject}</p>
                    <p style="margin: 0;"><strong>Message:</strong></p>
                    <div style="background-color: #ffffff; padding: 16px; border: 1px solid #e2e8f0; border-radius: 6px; margin-top: 8px; white-space: pre-wrap;">${data.message}</div>
                </div>
                <p style="color: #64748b; font-size: 14px; text-align: center; margin-bottom: 0;">Sent on ${new Date().toLocaleString()}</p>
            </div>
            <div style="background-color: #f8fafc; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0;">&copy; ${new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </div>
    `;
};

export default sendEmail;
