import nodemailer from 'nodemailer';
console.log("Verification EMAIL_USER:", process.env.EMAIL_USER);
console.log("Verification EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Send email to all subscribers for new post
export const sendNewPostEmail = async (emails, type, title, slug) => {
  const capitalType = type.charAt(0).toUpperCase() + type.slice(1);
  const url = `${process.env.FRONTEND_BASE_URL}/resources/${type}/${slug}`;

  const mailOptions = {
    from: `"CyberPunk" <${process.env.EMAIL_USER}>`,
    bcc: emails.join(','),
    subject: `New ${capitalType} published: ${title}`,
    headers: {
      'X-CyberPunk-Notification': 'NewPost',
    },
    html: `
      <h2>New ${capitalType} Alert</h2>
      <p>We just published a new ${type} titled <strong>${title}</strong>.</p>
      <p><a href="${url}" target="_blank">Click here to read it now</a></p>
      <br/>
      <p>— CyberPunk Team</p>
    `,
    text: `New ${capitalType} published: ${title}\nRead it here: ${url}`,
  };

  await transporter.sendMail(mailOptions);
  console.log(`📢 New ${capitalType} email sent to ${emails.length} subscribers`);
};

// Send password reset email
export const sendResetPasswordEmail = async (email, token) => {
  // const encodedToken = encodeURIComponent(token);
  const resetLink = `${process.env.FRONTEND_BASE_URL}/reset-password?token=${encodeURIComponent(token)}`;

  const mailOptions = {
    from: `"CyberPunk" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Reset Your Password',
    headers: {
      'X-CyberPunk-Notification': 'ResetPassword',
    },
    html: `
      <h2>Password Reset Request</h2>
      <p>Click the button below to reset your password:</p>
      <p><a href="${resetLink}" target="_blank" style="background-color: #2C1A47; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none;">Reset Password</a></p>
      <p>If you did not request this, you can safely ignore this email.</p>
      <br />
      <p>— CyberPunk Team</p>
    `,
    text: `To reset your password, visit the following link:\n${resetLink}`,
  };

  await transporter.sendMail(mailOptions);

};

export const sendVerificationEmail = async (email, token) => {
  const verifyUrl = `${process.env.FRONTEND_BASE_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `"CyberPunk" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Verify your email',
    headers: {
      'X-CyberPunk-Notification': 'VerificationEmail',
    },
    html: `
      <h2>Email Verification</h2>
      <p>Please verify your email by clicking the link below:</p>
      <p><a href="${verifyUrl}" target="_blank" style="background-color: #2C1A47; color: white; padding: 10px 15px; border-radius: 5px; text-decoration: none;">Verify Email</a></p>
      <p>If you did not request this, you can safely ignore this email.</p>
      <br />
      <p>— CyberPunk Team</p>
    `,
    text: `To verify your email, visit the following link:\n${verifyUrl}`,
  });
};



// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,     // your Gmail address
//     pass: process.env.EMAIL_PASS      // your Gmail app password (not your login password)
//   },
// });

// export const sendNewPostEmail = async (emails, type, title, slug) => {
//   const capitalType = type.charAt(0).toUpperCase() + type.slice(1);
//   const url = `${process.env.FRONTEND_BASE_URL}/resources/${type}/${slug}`;

//   const mailOptions = {
//     from: `"CyberPunk" <${process.env.EMAIL_USER}>`,
//     bcc: emails.join(','),
//     subject: `New ${capitalType} published: ${title}`,
//     html: `
//       <h2>New ${capitalType} Alert</h2>
//       <p>We just published a new ${type} titled <strong>${title}</strong>.</p>
//       <p><a href="${url}">Click here to read it now</a></p>
//       <p>— CyberPunk Team</p>
//     `
//   };

//   await transporter.sendMail(mailOptions);
// };

// // Send password reset email
// export const sendResetPasswordEmail = async (email, token) => {
//   const resetLink = `${process.env.FRONTEND_BASE_URL}/reset-password?token=${token}`;

//   const mailOptions = {
//     from: `"CyberPunk" <${process.env.EMAIL_USER}>`,
//     to: email,
//     subject: 'Reset Your Password',
//     html: `
//       <h2>Password Reset Request</h2>
//       <p>Click the link below to reset your password:</p>
//       <p><a href="${resetLink}">Reset Link</a></p>
//       <p>If you did not request this, you can safely ignore this email.</p>
//       <br />
//       <p>— CyberPunk Team</p>
//     `
//   };

//   await transporter.sendMail(mailOptions);
// };
