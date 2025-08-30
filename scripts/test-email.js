// Test script for Resend email functionality
// Run with: node scripts/test-email.js

// Load environment variables from .env.local
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

const { Resend } = require('resend');

async function testEmail() {
  console.log('🔍 Checking environment variables...');
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ Set' : '❌ Not set');
  console.log('FROM_EMAIL:', process.env.FROM_EMAIL || 'onboarding@resend.dev');

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY environment variable is not set');
    console.log('Please create a .env.local file with your Resend API key');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    console.log('📧 Testing Resend email functionality...');

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend    .dev',
      to: 'contact@jenjacobsen.com', // Use your verified email for testing
      subject: 'Test Email - Portfolio Contact Form',
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to verify Resend integration is working.</p>
        <p>Sent at: ${new Date().toISOString()}</p>
      `,
      text: `
Test Email

This is a test email to verify Resend integration is working.

Sent at: ${new Date().toISOString()}
      `,
    });

    if (error) {
      console.error('❌ Email sending failed:', error);
      return;
    }

    console.log('✅ Email sent successfully!');
    console.log('Email ID:', data?.id);
    console.log('Check your email at contact@jenjacobsen.com');
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testEmail();
