import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, organization, description, cartItems } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'mohit.work21022@gmail.com', // your receiving address
      replyTo: email, // so replies go to the sender
      subject: `New Service Request from ${name}`,
      html: `
        <h2>Service Request Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        ${description ? `<p><strong>Description:</strong> ${description}</p>` : ''}
        <h3>Requested Services:</h3>
        <ul>
          ${cartItems.map(item => `<li>${item.name}</li>`).join('')}
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
