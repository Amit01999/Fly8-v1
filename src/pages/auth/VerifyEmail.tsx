// import { useEffect, useState, FormEvent } from 'react';
// import OtpInput from 'react-otp-input';
// import { Link, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Timer, CheckCircle } from 'lucide-react';
// import {
//   useAppDispatch,
//   useAppSelector,
// } from '@/hooks/redux/SelectorAndDispatchHooks';
// import { sendOtp, signUp } from '../../services/operations/authAPI';

// function VerifyEmail() {
//   const [otp, setOtp] = useState<string>('');
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   const signupData = useAppSelector(state => state.auth.signupData);
//   const loading = useAppSelector(state => state.auth.loading);

//   useEffect(() => {
//     if (!signupData) {
//       navigate('/signup');
//     }
//   }, [signupData, navigate]);

//   const handleVerifyAndSignup = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!signupData) return;

//     const { firstName, lastName, email, password, phone, country } = signupData;

//     dispatch(
//       signUp(
//         firstName,
//         lastName,
//         email,
//         password,
//         phone,
//         country,
//         otp,
//         navigate
//       )
//     );
//   };

//   return (
//     <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gradient-to-br from-sky-100 via-indigo-100 to-blue-100">
//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="w-16 h-16 relative">
//             <div className="w-full h-full rounded-full border-4 border-white border-opacity-20 animate-pulse"></div>
//             <div className="w-full h-full absolute top-0 left-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
//           </div>
//         </div>
//       ) : (
//         <div className="w-full max-w-md p-8  bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-400 rounded-3xl shadow-2xl border border-white border-opacity-20 relative overflow-hidden">
//           <div className="absolute -right-8 -top-8 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
//           <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

//           <div className="relative z-10">
//             <div className="mb-6 flex flex-col items-center">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
//                 <CheckCircle size={32} className="text-white" />
//               </div>
//               <h1 className="text-3xl font-bold text-center mb-2">
//                 Verify Email
//               </h1>
//               <p className=" text-center">
//                 Please enter the verification code sent to your email
//               </p>
//             </div>

//             <form onSubmit={handleVerifyAndSignup} className="space-y-6">
//               <div className="mb-8">
//                 <OtpInput
//                   value={otp}
//                   onChange={setOtp}
//                   numInputs={6}
//                   renderInput={props => (
//                     <input
//                       {...props}
//                       placeholder="-"
//                       style={{
//                         boxShadow:
//                           'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
//                       }}
//                       className="w-[48px] lg:w-[60px] border-0 bg-white bg-opacity-40 rounded-[0.5rem] text-black aspect-square text-center focus:border-0 focus:outline-2 focus:outline-primary"
//                     />
//                   )}
//                   containerStyle={{ justifyContent: 'center', gap: '0 8px' }}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
//               >
//                 <span className="mr-2">Verify Email</span>
//                 <CheckCircle size={18} />
//               </button>
//             </form>

//             <div className="mt-8 flex items-center justify-between">
//               <Link
//                 to="/signup"
//                 className="flex items-center gap-x-2  hover:opacity-100 transition-all duration-300 group"
//               >
//                 <ArrowLeft
//                   size={18}
//                   className="group-hover:-translate-x-1 transition-transform duration-300"
//                 />
//                 <span>Back To Signup</span>
//               </Link>
//               <button
//                 className="flex items-center gap-x-2 opacity-70  hover:text-white transition-colors duration-300 group"
//                 onClick={() =>
//                   signupData &&
//                   dispatch(sendOtp({ email: signupData.email, navigate }))
//                 }
//               >
//                 <Timer
//                   size={18}
//                   className="group-hover:rotate-12 transition-transform duration-300"
//                 />
//                 <span>Resend Code</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VerifyEmail;

// import { useEffect, useState, FormEvent } from 'react';
// import OtpInput from 'react-otp-input';
// import { Link, useNavigate } from 'react-router-dom';
// import { ArrowLeft, Timer, CheckCircle } from 'lucide-react';
// import {
//   useAppDispatch,
//   useAppSelector,
// } from '@/hooks/redux/SelectorAndDispatchHooks';
// import { sendOtp, signUp } from '../../services/operations/authAPI';

// function VerifyEmail() {
//   const [otp, setOtp] = useState<string>('');
//   const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//   const signupData = useAppSelector(state => state.auth.signupData);
//   const loading = useAppSelector(state => state.auth.loading);

//   useEffect(() => {
//     if (!signupData) {
//       navigate('/signup');
//     }
//   }, [signupData, navigate]);

//   const handleVerifyAndSignup = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!signupData) return;

//     const { firstName, lastName, email, password, phone, country, referral } =
//       signupData;

//     dispatch(
//       signUp(
//         firstName,
//         lastName,
//         email,
//         password,
//         phone,
//         country,
//         referral, // Include referral in signUp dispatch
//         otp,
//         navigate
//       )
//     );
//   };

//   return (
//     <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center bg-gradient-to-br from-sky-100 via-indigo-100 to-blue-100">
//       {loading ? (
//         <div className="flex justify-center items-center">
//           <div className="w-16 h-16 relative">
//             <div className="w-full h-full rounded-full border-4 border-white border-opacity-20 animate-pulse"></div>
//             <div className="w-full h-full absolute top-0 left-0 border-4 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
//           </div>
//         </div>
//       ) : (
//         <div className="w-full max-w-md p-8  bg-gradient-to-br from-purple-300 via-indigo-300 to-blue-400 rounded-3xl shadow-2xl border border-white border-opacity-20 relative overflow-hidden">
//           <div className="absolute -right-8 -top-8 w-40 h-40 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
//           <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

//           <div className="relative z-10">
//             <div className="mb-6 flex flex-col items-center">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg">
//                 <CheckCircle size={32} className="text-white" />
//               </div>
//               <h1 className="text-3xl font-bold text-center mb-2">
//                 Verify Email
//               </h1>
//               <p className="text-center">
//                 Please enter the verification code sent to your email
//               </p>
//             </div>

//             <form onSubmit={handleVerifyAndSignup} className="space-y-6">
//               <div className="mb-8">
//                 <OtpInput
//                   value={otp}
//                   onChange={setOtp}
//                   numInputs={6}
//                   renderInput={props => (
//                     <input
//                       {...props}
//                       placeholder="-"
//                       style={{
//                         boxShadow:
//                           'inset 0px -1px 0px rgba(255, 255, 255, 0.18)',
//                       }}
//                       className="w-[48px] lg:w-[60px] border-0 bg-white bg-opacity-40 rounded-[0.5rem] text-black aspect-square text-center focus:border-0 focus:outline-2 focus:outline-primary"
//                     />
//                   )}
//                   containerStyle={{ justifyContent: 'center', gap: '0 8px' }}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full py-4 px-6 bg-gradient-to-r from-primary to-secondary hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
//               >
//                 <span className="mr-2">Verify Email</span>
//                 <CheckCircle size={18} />
//               </button>
//             </form>

//             <div className="mt-8 flex items-center justify-between">
//               <Link
//                 to="/signup"
//                 className="flex items-center gap-x-2 hover:opacity-100 transition-all duration-300 group"
//               >
//                 <ArrowLeft
//                   size={18}
//                   className="group-hover:-translate-x-1 transition-transform duration-300"
//                 />
//                 <span>Back To Signup</span>
//               </Link>
//               <button
//                 className="flex items-center gap-x-2 opacity-70 hover:text-white transition-colors duration-300 group"
//                 onClick={() =>
//                   signupData &&
//                   dispatch(
//                     sendOtp({
//                       email: signupData.email,
//                       navigate,
//                     })
//                   )
//                 }
//               >
//                 <Timer
//                   size={18}
//                   className="group-hover:rotate-12 transition-transform duration-300"
//                 />
//                 <span>Resend Code</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VerifyEmail;
