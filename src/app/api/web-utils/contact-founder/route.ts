import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { transporterCommon } from '@/lib/utils/email';

export async function POST(req: Request) {
  try {
    const { email, name, message } = await req.json();

    if (!email || !name || !message) {
      return NextResponse.json({ error: 'Email, name, and message are required' }, { status: 400 });
    }

    await connectDB();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 10px; border-radius: 4px; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
      `
    };

    await transporterCommon.sendMail(mailOptions);

    return NextResponse.json({ message: 'User registered. Check your email to verify.' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
