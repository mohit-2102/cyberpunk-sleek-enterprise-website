'use client';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignupModal({ show, onClose }) {
  const [view, setView] = useState('signup');
  const [useEmailForm, setUseEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setShowPassword(false);
    setError('');
    setMessage('');
    setUseEmailForm(false);
  };

  const handleClose = () => {
    resetForm();
    setView('signup');
    onClose();
  };

  const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(loading) return;
    setError('');
    setMessage('');
    setLoading(true);

    if (!validateEmail()) return setError('Enter a valid email');
    if ((view === 'signup' || view === 'login') && password.length < 6)
      return setError('Password must be at least 6 characters');

    const normalizedEmail = email.trim().toLowerCase();

    try {
      if (view === 'signup') {
        // 1️⃣ Signup API call
        const res = await fetch('/api/auth/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: normalizedEmail.split('@')[0],
            email: normalizedEmail,
            password
          }),
        });

        const data = await res.json();
        if (!res.ok) return setError(data.message || 'Signup failed');

        // ✅ Store for later auto-login after verification
        localStorage.setItem("signupPassword", password);
        localStorage.setItem("signupEmail", normalizedEmail);

        setMessage("Signup successful. Please check your email to verify your account.");
        return;
      }

      else if (view === 'login') {
        const loginResult = await signIn('credentials', {
          email: normalizedEmail,
          password,
          redirect: false,
        });

        if (loginResult.error) {
          if (loginResult.error.includes('sign in with')) {
            const provider = loginResult.error.split('sign in with ')[1];
            const nice = provider[0].toUpperCase() + provider.slice(1);
            return setError(`This account is registered with ${nice}. Please use that to log in.`);
          }
          return setError('Login failed. Check credentials.');
        }

        handleClose();
      }

      else if (view === 'forgot') {
        // setLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/users/forgot-password`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: normalizedEmail }),
        });
        // setLoading(false);
        const data = await res.json();
        if (!res.ok) return setError(data.message || 'Failed to send reset email');
        setMessage('Reset link sent to your email');
      }

    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formTitle = {
    signup: 'Sign Up',
    login: 'Log In',
    forgot: 'Forgot Password',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">
        <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl">&times;</button>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">{formTitle[view]}</h2>

        {(view === 'signup' || view === 'login') && (
          <p className="text-center text-sm text-gray-600 mb-4">
            {view === 'signup' ? 'Already a member? ' : 'New to this site? '}
            <span className="text-blue-600 cursor-pointer font-medium" onClick={() => {
              setView(view === 'signup' ? 'login' : 'signup');
              resetForm();
            }}>
              {view === 'signup' ? 'Log In' : 'Sign Up'}
            </span>
          </p>
        )}

        {(view === 'signup' || view === 'login') && !useEmailForm && (
          <>
            <button onClick={() => signIn('google')} className="w-full border border-gray-300 py-2 rounded mb-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50">
              <img src="/images/google.png" alt="Google" className="h-5 w-5" />
              <span>{formTitle[view]} with Google</span>
            </button>
            <button onClick={() => signIn('facebook')} className="w-full bg-[#1877F2] text-white py-2 rounded mb-3 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#166fe0]">
              <img src="/images/facebook.png" alt="Facebook" className="h-5 w-5" />
              <span>{formTitle[view]} with Facebook</span>
            </button>
            <div className="flex items-center justify-center my-3">
              <div className="border-t w-full mr-2"></div>
              <span className="text-gray-400 text-sm">or</span>
              <div className="border-t w-full ml-2"></div>
            </div>
            <button onClick={() => setUseEmailForm(true)} className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100">
              {formTitle[view]} with Email
            </button>
          </>
        )}

        {(useEmailForm || view === 'forgot') && (
          <form onSubmit={handleSubmit} className="space-y-3 mt-2">
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />

            {(view === 'signup' || view === 'login') && (
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded pr-10"
                  required
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-600 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>
            )}

            {view === 'login' && (
              <div className="text-sm text-blue-600 cursor-pointer text-right" onClick={() => {
                setView('forgot');
                resetForm();
              }}>
                Forgot password?
              </div>
            )}

            {error && <p className="text-red-600 text-sm text-center">{error}</p>}
            {message && <p className="text-green-600 text-sm text-center">{message}</p>}

            <button
              type="submit"
              className={`w-full bg-[#2C1A47] text-white py-2 rounded cursor-pointer hover:bg-[#1e1034] transform transition-transform duration-150 active:scale-95 ${loading && 'opacity-70 cursor-not-allowed'}`}
              disabled={loading}
            >
              {loading ? 'Submitting...' : formTitle[view]}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}


// 'use client';
// import React, { useState } from 'react';
// import { signIn } from 'next-auth/react';

// export default function SignupModal({ show, onClose }) {
//   const [view, setView] = useState('signup');
//   const [useEmailForm, setUseEmailForm] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);

//   if (!show) return null;

//   const resetForm = () => {
//     setEmail('');
//     setPassword('');
//     setShowPassword(false);
//     setError('');
//     setMessage('');
//     setUseEmailForm(false);
//   };

//   const handleClose = () => {
//     resetForm();
//     setView('signup');
//     onClose();
//   };

//   const validateEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setMessage('');

//     if (!validateEmail()) return setError('Enter a valid email');
//     if ((view === 'signup' || view === 'login') && password.length < 6)
//       return setError('Password must be at least 6 characters');

//     const normalizedEmail = email.trim().toLowerCase();

//     try {
//       if (view === 'signup') {
//         // 1️⃣ Signup API call
//         const res = await fetch('/api/auth/signup', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             name: normalizedEmail.split('@')[0],
//             email: normalizedEmail,
//             password
//           }),
//         });

//         const data = await res.json();
//         if (!res.ok) return setError(data.message || 'Signup failed');

//         // ✅ Store temp password for auto-login after email verification
//         localStorage.setItem("signupPassword", password);

//         // 2️⃣ Auto-login attempt after signup
//         let loginResult = await signIn('credentials', {
//           email: normalizedEmail,
//           password,
//           redirect: false,
//         });

//         if (loginResult.error) {
//           // Retry after short delay
//           await new Promise(res => setTimeout(res, 300));
//           loginResult = await signIn('credentials', {
//             email: normalizedEmail,
//             password,
//             redirect: false,
//           });
//         }

//         if (loginResult.error) {
//           if (loginResult.error.includes('sign in with')) {
//             const provider = loginResult.error.split('sign in with ')[1];
//             const nice = provider[0].toUpperCase() + provider.slice(1);
//             return setError(`This account is registered with ${nice}. Please use that to log in.`);
//           }
//           return setError('Auto-login failed. Try logging in manually.');
//         }

//         handleClose(); // ✅ Success

//       } else if (view === 'login') {
//         const loginResult = await signIn('credentials', {
//           email: normalizedEmail,
//           password,
//           redirect: false,
//         });

//         if (loginResult.error) {
//           if (loginResult.error.includes('sign in with')) {
//             const provider = loginResult.error.split('sign in with ')[1];
//             const nice = provider[0].toUpperCase() + provider.slice(1);
//             return setError(`This account is registered with ${nice}. Please use that to log in.`);
//           }
//           return setError('Login failed. Check credentials.');
//         }

//         handleClose();

//       } else if (view === 'forgot') {
//         setLoading(true);
//         const res = await fetch('http://localhost:5500/api/users/forgot-password', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: normalizedEmail }),
//         });
//         setLoading(false);
//         const data = await res.json();
//         if (!res.ok) return setError(data.message || 'Failed to send reset email');
//         setMessage('Reset link sent to your email');
//       }

//     } catch (err) {
//       console.error(err);
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   const formTitle = {
//     signup: 'Sign Up',
//     login: 'Log In',
//     forgot: 'Forgot Password',
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//       <div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">
//         <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl">&times;</button>

//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">{formTitle[view]}</h2>

//         {(view === 'signup' || view === 'login') && (
//           <p className="text-center text-sm text-gray-600 mb-4">
//             {view === 'signup' ? 'Already a member? ' : 'New to this site? '}
//             <span className="text-blue-600 cursor-pointer font-medium" onClick={() => {
//               setView(view === 'signup' ? 'login' : 'signup');
//               resetForm();
//             }}>
//               {view === 'signup' ? 'Log In' : 'Sign Up'}
//             </span>
//           </p>
//         )}

//         {(view === 'signup' || view === 'login') && !useEmailForm && (
//           <>
//             <button onClick={() => signIn('google')} className="w-full border border-gray-300 py-2 rounded mb-3 flex items-center justify-center gap-2 hover:bg-gray-50">
//               <img src="/images/google.png" alt="Google" className="h-5 w-5" />
//               <span>{formTitle[view]} with Google</span>
//             </button>
//             <button onClick={() => signIn('facebook')} className="w-full bg-[#1877F2] text-white py-2 rounded mb-3 flex items-center justify-center gap-2 hover:bg-[#166fe0]">
//               <img src="/images/facebook.png" alt="Facebook" className="h-5 w-5" />
//               <span>{formTitle[view]} with Facebook</span>
//             </button>
//             <div className="flex items-center justify-center my-3">
//               <div className="border-t w-full mr-2"></div>
//               <span className="text-gray-400 text-sm">or</span>
//               <div className="border-t w-full ml-2"></div>
//             </div>
//             <button onClick={() => setUseEmailForm(true)} className="w-full border border-gray-300 py-2 rounded hover:bg-gray-100">
//               {formTitle[view]} with Email
//             </button>
//           </>
//         )}

//         {(useEmailForm || view === 'forgot') && (
//           <form onSubmit={handleSubmit} className="space-y-3 mt-2">
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded"
//               required
//             />

//             {(view === 'signup' || view === 'login') && (
//               <div className="relative">
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded pr-10"
//                   required
//                 />
//                 <span className="absolute right-3 top-2.5 text-sm text-gray-600 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
//                   {showPassword ? 'Hide' : 'Show'}
//                 </span>
//               </div>
//             )}

//             {view === 'login' && (
//               <div className="text-sm text-blue-600 cursor-pointer text-right" onClick={() => {
//                 setView('forgot');
//                 resetForm();
//               }}>
//                 Forgot password?
//               </div>
//             )}

//             {error && <p className="text-red-600 text-sm text-center">{error}</p>}
//             {message && <p className="text-green-600 text-sm text-center">{message}</p>}

//             <button
//               type="submit"
//               className={`w-full bg-[#2C1A47] text-white py-2 rounded hover:bg-[#1e1034] transform transition-transform duration-150 active:scale-95 ${loading && 'opacity-70 cursor-not-allowed'}`}
//               disabled={loading}
//             >
//               {loading ? 'Sending...' : formTitle[view]}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }


