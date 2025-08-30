export function createEmailHTML(data: {
  name: string;
  email: string;
  projectVision: string;
  techPreferences?: string;
  timeline: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
    }
    .container {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .header {
      border-bottom: 3px solid #0ea5e9;
      padding-bottom: 20px;
      margin-bottom: 30px;
    }
    .header h1 {
      color: #0ea5e9;
      margin: 0;
      font-size: 24px;
    }
    .field {
      margin-bottom: 20px;
    }
    .field-label {
      font-weight: 600;
      color: #555;
      margin-bottom: 5px;
      display: block;
    }
    .field-value {
      background-color: #f8f9fa;
      padding: 12px;
      border-radius: 4px;
      border-left: 4px solid #0ea5e9;
    }
    .footer {
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #eee;
      font-size: 14px;
      color: #666;
    }
    .timestamp {
      background-color: #f1f5f9;
      padding: 10px;
      border-radius: 4px;
      font-size: 12px;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Contact Form Submission</h1>
      <p>Someone has submitted a contact form on your portfolio website.</p>
    </div>

    <div class="field">
      <span class="field-label">👤 Name:</span>
      <div class="field-value">${data.name}</div>
    </div>

    <div class="field">
      <span class="field-label">📧 Email:</span>
      <div class="field-value">${data.email}</div>
    </div>

    <div class="field">
      <span class="field-label">💡 Project Vision:</span>
      <div class="field-value">${data.projectVision.replace(/\n/g, '<br>')}</div>
    </div>

    <div class="field">
      <span class="field-label">⚙️ Technology Preferences:</span>
      <div class="field-value">${data.techPreferences || 'Not specified'}</div>
    </div>

    <div class="field">
      <span class="field-label">⏰ Timeline:</span>
      <div class="field-value">${data.timeline}</div>
    </div>

    <div class="footer">
      <div class="timestamp">
        📅 Submitted at: ${new Date().toLocaleString('en-US', {
          timeZone: 'Australia/Melbourne',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })}
      </div>
      <p style="margin-top: 15px;">
        <strong>Quick Actions:</strong><br>
        • Reply directly to this email to respond to ${data.name}<br>
        • Add ${data.email} to your contacts<br>
        • Review the project requirements above
      </p>
    </div>
  </div>
</body>
</html>
  `;
}

export function createEmailText(data: {
  name: string;
  email: string;
  projectVision: string;
  techPreferences?: string;
  timeline: string;
}) {
  return `
New Contact Form Submission - Jen Jacobsen Portfolio

Name: ${data.name}
Email: ${data.email}
Project Vision: ${data.projectVision}
Technology Preferences: ${data.techPreferences || 'Not specified'}
Timeline: ${data.timeline}

Submitted at: ${new Date().toLocaleString('en-US', {
    timeZone: 'Australia/Melbourne',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to ${data.name}.
  `;
}
