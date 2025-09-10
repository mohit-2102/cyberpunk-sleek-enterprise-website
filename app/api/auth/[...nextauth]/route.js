import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import connectDB from '@/backend/config/db';
import User from '@/backend/models/User';
import bcrypt from 'bcryptjs';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await connectDB();

        const email = credentials.email.trim().toLowerCase();
        const user = await User.findOne({ email });

        if (!user) throw new Error('No user found with this email');

        if (user.provider !== 'email') {
          const readable = {
            google: 'Google',
            facebook: 'Facebook',
            email: 'Email and password',
          };
          throw new Error(
            `This account is registered with ${readable[user.provider]}. Please use that to log in.`
          );
        }

        const isMatch = await user.matchPassword(credentials.password);
        if (!isMatch) throw new Error('Invalid email or password');

        // ✅ BLOCK unverified users
        if (!user.isVerified) {
          throw new Error('Please verify your email before logging in.');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          provider: user.provider,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'select_account', // ✅ Force account chooser
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      await connectDB();

      const email = user.email.trim().toLowerCase();
      const existing = await User.findOne({ email });

      if (existing) {
        // ✅ Normalize provider name
        const normalizedProvider = account.provider === 'credentials' ? 'email' : account.provider;

        if (existing.provider !== normalizedProvider) {
          throw new Error(`This account is registered via ${existing.provider}. Please sign in with ${existing.provider}`);
        }

        user.id = existing._id.toString();
        return true;
      }

      // ✅ Register new user
      const newUser = await User.create({
        name: user.name || '',
        email,
        provider: account.provider === 'credentials' ? 'email' : account.provider,
        password: '', // not required for Google/Facebook
      });

      user.id = newUser._id.toString();
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.provider = user.provider;
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id;
        session.user.provider = token.provider;
      }
      return session;
    },
  },

  session: { strategy: 'jwt' },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from 'next-auth/providers/google';
// import FacebookProvider from 'next-auth/providers/facebook';
// import connectDB from '@/backend/config/db';
// import User from '@/backend/models/User';
// import bcrypt from 'bcryptjs';

// export const authOptions = {
//     providers: [
//         CredentialsProvider({
//             name: 'Credentials',
//             credentials: {
//                 email: { label: 'Email', type: 'email' },
//                 password: { label: 'Password', type: 'password' },
//             },
//             async authorize(credentials) {
//                 await connectDB();

//                 const email = credentials.email.trim().toLowerCase();
//                 const user = await User.findOne({ email });

//                 if (!user) throw new Error('No user found with this email');

//                 if (user.provider !== 'email') {
//                     const readable = {
//                         google: 'Google',
//                         facebook: 'Facebook',
//                         email: 'Email and password',
//                     };
//                     throw new Error(
//                         `This account is registered with ${readable[user.provider]}. Please use that to log in.`
//                     );
//                 }

//                 const isMatch = await user.matchPassword(credentials.password);
//                 if (!isMatch) throw new Error('Invalid email or password');

//                 return {
//                     id: user._id.toString(),
//                     email: user.email,
//                     name: user.name,
//                     provider: user.provider,
//                 };
//             },
//         }),


//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             authorization: {
//                 params: {
//                     prompt: 'select_account', // ✅ Force account chooser
//                     access_type: 'offline',
//                     response_type: 'code',
//                 },
//             },
//         }),

//         FacebookProvider({
//             clientId: process.env.FACEBOOK_CLIENT_ID,
//             clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//         }),
//     ],

//     callbacks: {
//         async signIn({ user, account }) {
//             await connectDB();

//             const email = user.email.trim().toLowerCase();
//             const existing = await User.findOne({ email });

//             if (existing) {
//                 // Check for provider mismatch
//                 if (existing.provider !== account.provider) {
//                     throw new Error(`This account is registered via ${existing.provider}. Please sign in with ${existing.provider}`);
//                 }

//                 user.id = existing._id.toString();
//                 return true;
//             }

//             // Register new user
//             const newUser = await User.create({
//                 name: user.name || '',
//                 email,
//                 provider: account.provider,
//                 password: '', // not required for social
//             });

//             user.id = newUser._id.toString();
//             return true;
//         },

//         async jwt({ token, user }) {
//             if (user) {
//                 token.id = user.id;
//                 token.email = user.email;
//                 token.provider = user.provider;
//             }
//             return token;
//         },

//         async session({ session, token }) {
//             if (token && session.user) {
//                 session.user.id = token.id;
//                 session.user.provider = token.provider;
//             }
//             return session;
//         },
//     },

//     session: { strategy: 'jwt' },
//     secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
