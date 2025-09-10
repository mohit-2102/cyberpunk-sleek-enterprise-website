import { NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/backend/config/db';
import User from '@/backend/models/User';
import { sendVerificationEmail } from '@/backend/utils/mailer'; // ⬅️ You'll create this function

export async function POST(req) {
  try {
    const { email, password, name = '' } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing email or password' }, { status: 400 });
    }

    await connectDB();

    const normalizedEmail = email.trim().toLowerCase();
    const existing = await User.findOne({ email: normalizedEmail });

    if (existing) {
      const readable = {
        google: 'Google',
        facebook: 'Facebook',
        email: 'Email and password',
      };
      const providerName = readable[existing.provider] || existing.provider;
      return NextResponse.json(
        { message: `This account is already registered with ${providerName}. Please use that to log in.` },
        { status: 400 }
      );
    }

    // ✅ Generate token
    const verifyToken = crypto.randomBytes(32).toString('hex');

    // ✅ Create new user (unverified)
    const newUser = new User({
      name: name.trim(),
      email: normalizedEmail,
      password,
      provider: 'email',
      isVerified: false,
      verifyToken,
    });

    await newUser.save();

    // ✅ Send verification email
    await sendVerificationEmail(newUser.email, verifyToken);

    return NextResponse.json({ message: 'Signup successful. Check your email to verify your account.' }, { status: 201 });

  } catch (err) {
    console.error('Signup error:', err);
    return NextResponse.json({ message: err.message || 'Server error' }, { status: 500 });
  }
}


// import { NextResponse } from 'next/server';
// import connectDB from '@/backend/config/db';
// import User from '@/backend/models/User';

// export async function POST(req) {
//   try {
//     const { email, password, name = '' } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json({ message: 'Missing email or password' }, { status: 400 });
//     }

//     await connectDB();

//     const normalizedEmail = email.trim().toLowerCase();

//     const existing = await User.findOne({ email: normalizedEmail });

//     if (existing) {
//       const readable = {
//         google: 'Google',
//         facebook: 'Facebook',
//         email: 'Email and password',
//       };

//       const providerName = readable[existing.provider] || existing.provider;
//       return NextResponse.json(
//         { message: `This account is already registered with ${providerName}. Please use that to log in.` },
//         { status: 400 }
//       );
//     }

//     const newUser = new User({
//       name: name.trim(),
//       email: normalizedEmail,
//       password, // 🔐 Assumes password hashing in Mongoose pre-save middleware
//       provider: 'email',
//     });

//     await newUser.save();

//     return NextResponse.json({ message: 'Signup successful' }, { status: 201 });
//   } catch (err) {
//     console.error('Signup error:', err);
//     return NextResponse.json({ message: err.message || 'Server error' }, { status: 500 });
//   }
// }
