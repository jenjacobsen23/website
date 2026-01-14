import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for email subscription
const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = subscribeSchema.parse(body);

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured. Please contact the administrator.',
        },
        { status: 500 }
      );
    }

    // Call Resend API directly via fetch to bypass SDK issues
    const contactPayload = {
      email: validatedData.email,
      unsubscribed: false,
    };
    
    console.log('Creating contact with payload:', JSON.stringify(contactPayload, null, 2));
    
    const response = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactPayload),
    });

    const result = await response.json();
    
    if (!response.ok) {
      const error = {
        statusCode: response.status,
        message: result.message || 'Failed to create contact',
        name: result.error?.name || 'api_error',
      };
      console.error('Resend API error:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to subscribe. Please try again.',
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log('Contact added successfully:', result);

    return NextResponse.json(
      {
        success: true,
        message: "Thanks! You'll be notified about new tools.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please enter a valid email address',
        },
        { status: 400 }
      );
    }

    console.error('Subscription error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
