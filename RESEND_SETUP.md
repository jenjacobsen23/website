# Resend Email Setup Guide

This guide will help you set up Resend to send emails from your contact form.

## 1. Sign up for Resend

1. Go to [resend.com](https://resend.com)
2. Create a free account
3. Verify your email address

## 2. Get your API Key

1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the API key (starts with `re_`)

## 3. Set up Environment Variables

Create a `.env.local` file in your project root with:

```env
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here

# From email address
# Option 1: Use your own domain (recommended for production)
FROM_EMAIL=noreply@yourdomain.com

# Option 2: Use Resend's sandbox domain (for testing)
FROM_EMAIL=onboarding@resend.dev
```

## 4. Verify Your Domain (Production)

For production use, you should verify your own domain:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Follow the DNS setup instructions
4. Wait for verification (usually takes a few minutes)

## 5. Test the Integration

1. Start your development server: `npm run dev`
2. Fill out the contact form
3. Submit the form
4. Check your email at `contact@jenjacobsen.com`

## 6. Monitor Email Delivery

- Check the Resend dashboard for delivery status
- View logs in your terminal/console
- Check spam folders if emails don't arrive

## Troubleshooting

### Common Issues:

1. **"Invalid API Key"**: Make sure your API key is correct and starts with `re_`
2. **"Domain not verified"**: Use `onboarding@resend.dev` for testing, or verify your domain
3. **"Rate limit exceeded"**: Free tier allows 100 emails/day
4. **Emails in spam**: Verify your domain and set up proper DNS records

### Development vs Production:

- **Development**: Use `onboarding@resend.dev` as FROM_EMAIL
- **Production**: Use your verified domain (e.g., `noreply@yourdomain.com`)

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already in `.gitignore`
- Rotate your API keys regularly
- Monitor your Resend usage and billing
