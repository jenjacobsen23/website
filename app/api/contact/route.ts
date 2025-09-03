import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { createEmailHTML, createEmailText } from './email-template';

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  projectVision: z.string().min(10, 'Project vision must be at least 10 characters'),
  techPreferences: z.string().optional(),
  timeline: z.string().min(1, 'Timeline is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

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

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Create email content using templates
    const emailHTML = createEmailHTML(validatedData);
    const emailText = createEmailText(validatedData);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@jenjacobsen.com',
      to: 'contact@jenjacobsen.com',
      subject: 'New Contact Form Submission - Jen Jacobsen',
      html: emailHTML,
      text: emailText,
      replyTo: validatedData.email,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email. Please try again.',
        },
        { status: 500 }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong. Please try again.',
      },
      { status: 500 }
    );
  }
}
