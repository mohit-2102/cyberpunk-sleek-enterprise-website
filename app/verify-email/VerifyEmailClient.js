'use client';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function VerifyEmailPage() {
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get('token');
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    if (!token) {
      setStatus('Invalid or missing token.');
      return;
    }

    const verify = async () => {
      try {
        const res = await fetch(`/api/auth/verify-email?token=${token}`);
        const data = await res.json();

        if (!res.ok) {
          setStatus(data.message || 'Verification failed.');
          return;
        }

        // Try auto-login if we have stored credentials
        const savedPassword = localStorage.getItem("signupPassword");
        const savedEmail = localStorage.getItem("signupEmail");

        if (savedEmail && savedPassword) {
          const loginResult = await signIn('credentials', {
            email: savedEmail,
            password: savedPassword,
            redirect: true,
            callbackUrl: '/' // Change redirect target if needed
          });

          localStorage.removeItem("signupPassword");
          localStorage.removeItem("signupEmail");

          if (loginResult?.error) {
            setStatus('Verified. Redirecting to login...');
            setTimeout(() => {
        router.push('/'); // or show login modal
      }, 2000);
          }
        } else {
          setStatus('Verified. Redirecting to login...');
          setTimeout(() => {
        router.push('/'); // or show login modal
      }, 2000);
        }
      } catch (err) {
        setStatus('Verification failed. Please try again.');
      }
    };

    verify();
  }, [token]);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-semibold">{status}</h1>
    </div>
  );
}



// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { signIn } from 'next-auth/react';

// export default function VerifyEmailPage() {
//   const [message, setMessage] = useState('Verifying...');
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   useEffect(() => {
//     const token = searchParams.get('token');
//     if (!token) {
//       setMessage('Invalid verification link.');
//       return;
//     }

//     const verifyEmail = async () => {
//       try {
//         const res = await fetch(`/api/auth/verify-email?token=${token}`);
//         const data = await res.json();

//         if (!res.ok) {
//           setMessage(data.message || 'Verification failed.');
//           return;
//         }

//         setMessage('Email verified! Logging you in...');

//         const storedPassword = localStorage.getItem('signupPassword');
//         if (storedPassword) {
//           const loginRes = await signIn('credentials', {
//             email: data.email,
//             password: storedPassword,
//             redirect: false
//           });

//           localStorage.removeItem('signupPassword'); // cleanup

//           if (loginRes.error) {
//             setMessage('Verified, but auto-login failed. Please log in manually.');
//           } else {
//             router.push('/');
//           }
//         } else {
//           setMessage('Verified. Please log in manually.');
//         }

//       } catch (err) {
//         console.error(err);
//         setMessage('Something went wrong.');
//       }
//     };

//     verifyEmail();
//   }, [searchParams, router]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-lg">{message}</p>
//     </div>
//   );
// }


// 'use client';
// import { useEffect, useState } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';
// import { signIn } from 'next-auth/react';

// export default function VerifyEmailPage() {
//   const [message, setMessage] = useState('');
//   const searchParams = useSearchParams();
//   const router = useRouter();

//   useEffect(() => {
//     const token = searchParams.get('token');
//     if (!token) {
//       setMessage('Invalid verification link.');
//       return;
//     }

//     const verifyEmail = async () => {
//       try {
//         const res = await fetch(`/api/auth/verify-email?token=${token}`);
//         const data = await res.json();

//         if (!res.ok) {
//           setMessage(data.message || 'Verification failed.');
//           return;
//         }

//         setMessage('Email verified! Logging you in...');

//         const storedPassword = localStorage.getItem('signupPassword');
//         if (storedPassword) {
//           const loginRes = await signIn('credentials', {
//             email: data.email,
//             password: storedPassword,
//             redirect: false
//           });

//           localStorage.removeItem('signupPassword'); // cleanup

//           if (loginRes.error) {
//             setMessage('Verified, but auto-login failed. Please log in manually.');
//           } else {
//             router.push('/'); // Redirect to homepage after login
//           }
//         } else {
//           setMessage('Verified. Please log in manually.');
//         }

//       } catch (err) {
//         console.error(err);
//         setMessage('Something went wrong.');
//       }
//     };

//     verifyEmail();
//   }, [searchParams, router]);

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <p className="text-lg">{message}</p>
//     </div>
//   );
// }




// "use client";
// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";

// export default function VerifyEmailPage() {
//   const [message, setMessage] = useState("Verifying your email...");
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const token = searchParams.get("token");

//   useEffect(() => {
//     if (!token) {
//       setMessage("Invalid verification link.");
//       return;
//     }

//     const verifyEmail = async () => {
//       try {
//         const res = await axios.get(`/api/auth/verify-email?token=${token}`);
        
//         // Save token in localStorage (or cookies)
//         localStorage.setItem("authToken", res.data.token);

//         setMessage("Email verified! Redirecting...");
//         setTimeout(() => router.push("/dashboard"), 1500);
//       } catch (err) {
//         setMessage(err.response?.data?.message || "Verification failed.");
//       }
//     };

//     verifyEmail();
//   }, [token, router]);

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <p>{message}</p>
//     </div>
//   );
// }



// 'use client';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function VerifyEmailPage() {
//   const params = useSearchParams();
//   const token = params.get('token');
//   const [message, setMessage] = useState('Verifying...');

//   useEffect(() => {
//     if (!token) return setMessage('Missing token');

//     fetch(`/api/auth/verify-email?token=${token}`)
//       .then(res => res.json())
//       .then(data => setMessage(data.message))
//       .catch(() => setMessage('Verification failed. Try again.'));
//   }, [token]);

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-50">
//       <div className="bg-white p-6 rounded shadow text-center max-w-md">
//         <h1 className="text-xl font-bold mb-4">Email Verification</h1>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// }   
