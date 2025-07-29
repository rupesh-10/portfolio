# Email Contact Form Setup Guide

## Steps to Configure EmailJS

### 1. Create EmailJS Account
1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (rupeshdhakal2@gmail.com)
5. Copy the **Service ID** (you'll need this)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Message - {{subject}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Copy the **Template ID** (you'll need this)

### 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### 5. Update Your Code
In `js/main.js`, replace these placeholders:

```javascript
// Line 305: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY_HERE");

// Line 334: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', templateParams)
```

### 6. Test the Form
1. Open your website
2. Fill out the contact form
3. Submit and check your email (rupeshdhakal2@gmail.com)

## Example Configuration
```javascript
// Initialize EmailJS
emailjs.init("user_abc123xyz789"); // Your public key

// Send email
emailjs.send('service_gmail', 'template_contact', templateParams) // Your service and template IDs
```

## Troubleshooting
- Make sure your Gmail account allows less secure apps (if using Gmail)
- Check EmailJS dashboard for delivery logs
- Verify all IDs are correctly copied
- Test in different browsers

## Security Note
- Never expose your private key in client-side code
- The public key is safe to use in frontend applications
- EmailJS handles the security on their servers
