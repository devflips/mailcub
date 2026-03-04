# Mailcub — Node.js SDK to send transactional emails and newsletters from your own domain using the MailCub email API.

**Mailcub** is a lightweight Node.js package for sending HTML or plain‑text emails and attachments from your own domain via the MailCub email API. It’s built for transactional emails, app notifications, and simple newsletters without managing SMTP servers yourself.

[![npm version](https://img.shields.io/npm/v/mailcub.svg)](https://www.npmjs.com/package/mailcub)
[![npm downloads](https://img.shields.io/npm/dm/mailcub.svg)](https://www.npmjs.com/package/mailcub)
[![license](https://img.shields.io/npm/l/mailcub.svg)](https://www.npmjs.com/package/mailcub)

---

## Installation

```bash
npm install mailcub
```

---

## Quick example (30-second demo)

```javascript
const mailcub = require('mailcub');

const emailBody = {
  email_from: 'hello@yourdomain.com',
  receiver: 'user@example.com',
  subject: 'Welcome',
  html: '<h1>Hello!</h1><p>Thanks for signing up.</p>'
};

mailcub.sendMail(emailBody, 'your-secret-key')
  .then(() => console.log('Email sent'))
  .catch(err => console.error('Error:', err));
```

Get your secret key at [mailcub.com](https://mailcub.com).

---

## Full API & options

### `sendMail(body, key)`

Sends an email. Returns a Promise.

| Parameter | Type | Description |
|-----------|------|-------------|
| `body` | Object | Email payload (see below). |
| `key` | String | Secret key for authentication. From [client.mailcub.com](https://client.mailcub.com). |

### `body` object

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email_from` | string | Yes | Sender email (use an address on your registered domain). |
| `receiver` | string | Yes | Recipient email address. |
| `subject` | string | Yes | Email subject line. |
| `html` | string | No* | HTML body of the email. |
| `text` | string | No* | Plain-text body of the email. Use `html` or `text` (or both). |
| `attachment` | File or File[] | No | Single file or array of files (file objects only, not paths). |

*At least one of `html` or `text` is required.

### Examples

**Plain text only**

```javascript
mailcub.sendMail({
  email_from: 'noreply@yourdomain.com',
  receiver: 'customer@example.com',
  subject: 'Order confirmation',
  text: 'Thank you for your order. Order #1234 has been received.'
}, process.env.MAILCUB_SECRET_KEY);
```

**HTML only**

```javascript
mailcub.sendMail({
  email_from: 'noreply@yourdomain.com',
  receiver: 'customer@example.com',
  subject: 'Order confirmation',
  html: '<h1>Order #1234</h1><p>Thank you for your order.</p>'
}, process.env.MAILCUB_SECRET_KEY);
```

**With a single attachment**

```javascript
// attachment = file from request, Postman, etc.
mailcub.sendMail({
  email_from: 'billing@yourdomain.com',
  receiver: 'client@example.com',
  subject: 'Your invoice',
  html: '<p>Please find your invoice attached.</p>',
  attachment
}, process.env.MAILCUB_SECRET_KEY);
```

**With multiple attachments**

```javascript
// attachment = array of files (e.g. from request, Postman, etc.)
mailcub.sendMail({
  email_from: 'team@yourdomain.com',
  receiver: 'user@example.com',
  subject: 'Your documents',
  html: '<p>Attached are the requested files.</p>',
  attachment: [file1, file2]
}, process.env.MAILCUB_SECRET_KEY);
```

**Using async/await**

```javascript
const mailcub = require('mailcub');

async function sendWelcomeEmail(to) {
  try {
    await mailcub.sendMail({
      email_from: 'hello@yourdomain.com',
      receiver: to,
      subject: 'Welcome',
      html: '<h1>Welcome!</h1>'
    }, process.env.MAILCUB_SECRET_KEY);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
```

---

## Why choose Mailcub?

- **Simple API** — One function, clear parameters; no SMTP or server config.
- **Your domain** — Send from your own domain for a professional, branded look.
- **HTML or plain text** — Send rich HTML or simple plain-text emails (or both).
- **Attachments** — Single or multiple file attachments.
- **Secret-key auth** — Secure authentication; keep your key in env vars.
- **Lightweight** — Minimal dependencies; fits into existing Node.js apps.
- **Transactional & newsletters** — Suited for both one-off emails and bulk sending.

---

## Troubleshooting & FAQ

**Where do I get the secret key?**  
Sign up and get your key at [client.mailcub.com](https://client.mailcub.com).

**"Error sending email" or failed requests**  
- Ensure `email_from` uses a domain you’ve registered in Mailcub.  
- Check that your secret key is correct and not expired.  
- Verify `receiver` and `subject` are non-empty; include at least one of `html` or `text`.

**Attachments not sending**  
- `attachment` must be file(s) (e.g. from request, Postman, or your app), not path strings.  
- For multiple files, pass an array: `attachment: [file1, file2]`.

**Need help?**  
Contact **support@mailcub.com** or open an issue: [GitHub Issues](https://github.com/devflips/mailcub/issues).

---

## Contributing & Code of Conduct

Contributions are welcome. Please open an issue or pull request on [GitHub](https://github.com/devflips/mailcub). Be respectful and constructive; we expect a courteous, inclusive environment for everyone.

---


## License & Author

- **License:** [ISC](https://opensource.org/licenses/ISC)  
- **Author:** [Devflips](https://github.com/devflips)  
- **Package:** [npm — mailcub](https://www.npmjs.com/package/mailcub) · [GitHub — mailcub](https://github.com/devflips/mailcub)
