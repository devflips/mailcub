# Mailcub Package Documentation
Version: 2.0.4

## Introduction
Mailcub is an npm package that enables you to send emails using a simple and straightforward interface. It provides a function to send emails with the following features:

## Sending HTML emails.
Attaching files to emails.
Sending emails with a secret key for authentication.

## Installation
To install the "mailcub" package, use npm:

```bash

npm install mailcub

```

## Usage
### Import the Package
You can import the "mailcub" package in your Node.js application as follows:

```javascript
const mailcub = require('mailcub');
```

### Sending an Email
To send an email, use the sendMail function with the following parameters:

- body (Object): An object containing the email details.
- key (String): The secret key for authentication.


```javascript
const emailBody = {
  email_from: 'user@yourdomain.com',
  receiver: 'user@example.com',
  subject: 'Subject',
  html: '<h1>Hello</h1>',
  attachment: 'attachment_path'
};

const secretKey = 'your-secret-key';

mailcub.sendMail(emailBody, secretKey)
  .then(() => {
    console.log('Email sent successfully');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
  });
```

## Parameters
- emailBody (Object):
    - email_from (String): The sender's email address.
    - receiver (String): The recipient's email address.
    - subject (String): The email subject.
    - html (String): The HTML content of the email.
    - attachment (String or Array): The file path of a single attachment, or an array of file paths for multiple attachments — e.g., ['path/to/file1', 'path/to/file2', 'path/to/file3'].

- secretKey (String): The secret key for authentication. You can obtain this key from console.mailcub.com.

## Support and Issues
If you encounter any issues or have questions, please contact our support team at support@mailcub.com.

## License
This package is distributed under the MIT License. See the LICENSE file for details.


