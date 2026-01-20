import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder_key');

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, message } = body;

    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY is not configured');
      return NextResponse.json(
        { message: 'Email service not configured' },
        { status: 503 }
      );
    }

    // Verstuur email
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['davivsmit@gmail.com'], // ✅ JOUW EMAIL HIER
      replyTo: email, // Zodat je kan terugmailen
      subject: `Nieuw bericht van ${name}`,
      html: `
        <h2>📩 Nieuw Contact Formulier Bericht</h2>
        <p><strong>Van:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('✅ Email sent:', data);

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email', error: error },
      { status: 500 }
    );
  }
}