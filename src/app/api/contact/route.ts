import { NextResponse } from 'next/server';
import { personalInfo } from '../../../data/constants';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Forward server-to-server to FormSubmit
    // This runs on Vercel's backend, completely avoiding client-side AdBlockers & CORS issues
    const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Inquiry from ${name}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await response.json().catch(() => null);

    if (response.ok && data?.success !== 'false') {
      return NextResponse.json({ success: true, message: 'Message sent successfully.' });
    }

    return NextResponse.json(
      {
        success: false,
        error: data?.message || 'Form submission could not be completed.',
      },
      { status: 502 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error.' },
      { status: 500 }
    );
  }
}

