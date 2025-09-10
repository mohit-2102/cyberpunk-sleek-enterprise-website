import { NextResponse } from 'next/server';
import connectDB from '@/backend/config/db';
import User from '@/backend/models/User';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.json({ message: 'Invalid or missing token.' }, { status: 400 });
  }

  await connectDB();

  const user = await User.findOne({ verifyToken: token });
  if (!user) {
    return NextResponse.json({ message: 'Invalid or expired token.' }, { status: 400 });
  }

  // ✅ Mark as verified
  user.isVerified = true;
  user.verifyToken = undefined;
  await user.save();

  // ✅ Return success with email so frontend can auto-login
  return NextResponse.json(
    {
      message: 'Email verified successfully.',
      email: user.email
    },
    { status: 200 }
  );
}


// import { NextResponse } from 'next/server';
// import connectDB from '@/backend/config/db';
// import User from '@/backend/models/User';

// export async function GET(req) {
//   const { searchParams } = new URL(req.url);
//   const token = searchParams.get('token');

//   if (!token) {
//     return NextResponse.json({ message: 'Invalid or missing token.' }, { status: 400 });
//   }

//   await connectDB();

//   const user = await User.findOne({ verifyToken: token });
//   if (!user) {
//     return NextResponse.json({ message: 'Invalid or expired token.' }, { status: 400 });
//   }

//   // ✅ Mark as verified
//   user.isVerified = true;
//   user.verifyToken = undefined;
//   await user.save();

//   // ✅ Send back email for frontend auto-login
//   return NextResponse.json(
//     {
//       message: 'Email verified successfully.',
//       email: user.email
//     },
//     { status: 200 }
//   );
// }



// // app/api/auth/verify-email/route.js
// import { NextResponse } from 'next/server';
// import connectDB from '@/backend/config/db';
// import User from '@/backend/models/User';

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const token = searchParams.get('token');

//     if (!token) {
//       return NextResponse.json({ message: 'Invalid or missing token.' }, { status: 400 });
//     }

//     await connectDB();

//     const user = await User.findOne({ verifyToken: token });
//     if (!user) {
//       return NextResponse.json({ message: 'Invalid or expired token.' }, { status: 400 });
//     }

//     // Mark as verified
//     user.isVerified = true;
//     user.verifyToken = undefined;
//     await user.save();

//     return NextResponse.json({
//       message: 'Email verified successfully.',
//       email: user.email // ✅ return email for frontend login
//     }, { status: 200 });

//   } catch (err) {
//     console.error('Email verification error:', err);
//     return NextResponse.json({ message: 'Server error' }, { status: 500 });
//   }
// }


