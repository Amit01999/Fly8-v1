// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { User, Mail, Lock, Building, Phone } from 'lucide-react';
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useToast } from '@/hooks/use-toast';
// import AuthLayout from '@/components/auth/AuthLayout';
// import RoleToggle from '@/components/auth/RoleToggle';
// import { useDispatch } from 'react-redux';
// import { signUp } from '@/services/operations/authAPI';
// import { AppDispatch } from '@/reducer/store';
// import { NavigateFunction } from 'react-router-dom';

// const SignUpStudent = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch<AppDispatch>();
//   const { toast } = useToast();

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phone: '',
//     country: '',
//     referral: '',
//   });

//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phone: '',
//     country: '',
//     referral: '',
//   });

//   const [hasReferral, setHasReferral] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = () => {
//     const newErrors = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       phone: '',
//       country: '',
//       referral: '',
//     };
//     let isValid = true;

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//       isValid = false;
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//       isValid = false;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     const phoneRegex = /^\+?\d{10,14}$/;
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//       isValid = false;
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid phone number';
//       isValid = false;
//     }

//     if (!formData.country.trim()) {
//       newErrors.country = 'Country is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       toast({
//         variant: 'destructive',
//         title: 'Form Error',
//         description: 'Please fill in all required fields correctly',
//       });
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const signupData = { ...formData };

//       await dispatch(
//         signUp(
//           signupData.firstName,
//           signupData.lastName,
//           signupData.email,
//           signupData.password,
//           signupData.phone,
//           signupData.country,
//           signupData.referral || undefined,
//           navigate
//         )
//       );

//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         phone: '',
//         country: '',
//         referral: '',
//       });

//       setErrors({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         phone: '',
//         country: '',
//         referral: '',
//       });

//       setHasReferral(false);
//     } catch (error: any) {
//       toast({
//         variant: 'destructive',
//         title: 'Error',
//         description: error.message || 'Something went wrong. Please try again.',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <AuthLayout>
//       <RoleToggle activeRole="student" />
//       <Card className="w-full">
//         <CardHeader>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center space-y-2"
//           >
//             <h1 className="text-2xl font-bold">Create Student Account</h1>
//             <p className="text-muted-foreground">
//               Join Fly8 to explore global education opportunities
//             </p>
//           </motion.div>
//         </CardHeader>

//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               {/* First Name */}
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First Name</Label>
//                 <div className="relative">
//                   <Input
//                     id="firstName"
//                     placeholder="John"
//                     value={formData.firstName}
//                     onChange={e =>
//                       setFormData({ ...formData, firstName: e.target.value })
//                     }
//                     className={`pl-10 ${
//                       errors.firstName ? 'border-red-500' : ''
//                     }`}
//                     required
//                   />
//                   <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 </div>
//                 {errors.firstName && (
//                   <p className="text-sm text-red-500">{errors.firstName}</p>
//                 )}
//               </div>

//               {/* Last Name */}
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last Name</Label>
//                 <div className="relative">
//                   <Input
//                     id="lastName"
//                     placeholder="Doe"
//                     value={formData.lastName}
//                     onChange={e =>
//                       setFormData({ ...formData, lastName: e.target.value })
//                     }
//                     className={`pl-10 ${
//                       errors.lastName ? 'border-red-500' : ''
//                     }`}
//                     required
//                   />
//                   <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 </div>
//                 {errors.lastName && (
//                   <p className="text-sm text-red-500">{errors.lastName}</p>
//                 )}
//               </div>
//             </div>

//             {/* Email */}
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <div className="relative">
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={e =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
//                   required
//                 />
//                 <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//               </div>
//               {errors.email && (
//                 <p className="text-sm text-red-500">{errors.email}</p>
//               )}
//             </div>

//             {/* Password */}
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Input
//                   id="password"
//                   type="password"
//                   placeholder="Create a strong password"
//                   value={formData.password}
//                   onChange={e =>
//                     setFormData({ ...formData, password: e.target.value })
//                   }
//                   className={`pl-10 ${errors.password ? 'border-red-500' : ''}`}
//                   required
//                 />
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//               </div>
//               {errors.password && (
//                 <p className="text-sm text-red-500">{errors.password}</p>
//               )}
//             </div>

//             {/* Phone */}
//             <div className="space-y-2">
//               <Label htmlFor="phone">WhatsApp Number</Label>
//               <div className="relative">
//                 <Input
//                   id="phone"
//                   type="tel"
//                   placeholder="+1234567890"
//                   value={formData.phone}
//                   onChange={e =>
//                     setFormData({ ...formData, phone: e.target.value })
//                   }
//                   className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
//                   required
//                 />
//                 <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//               </div>
//               {errors.phone && (
//                 <p className="text-sm text-red-500">{errors.phone}</p>
//               )}
//             </div>

//             {/* Country */}
//             <div className="space-y-2">
//               <Label htmlFor="country">Country</Label>
//               <div className="relative">
//                 <Input
//                   id="country"
//                   placeholder="Enter your country name"
//                   value={formData.country}
//                   onChange={e =>
//                     setFormData({ ...formData, country: e.target.value })
//                   }
//                   className={`pl-10 ${errors.country ? 'border-red-500' : ''}`}
//                   required
//                 />
//                 <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//               </div>
//               {errors.country && (
//                 <p className="text-sm text-red-500">{errors.country}</p>
//               )}
//             </div>

//             {/* Referral */}
//             <div className="space-y-2">
//               <div className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   id="hasReferral"
//                   checked={hasReferral}
//                   onChange={e => setHasReferral(e.target.checked)}
//                   className="h-4 w-4 text-primary"
//                 />
//                 <Label htmlFor="hasReferral">I have a referral code</Label>
//               </div>

//               {hasReferral && (
//                 <div className="space-y-2">
//                   <Label htmlFor="referral">Referral Code</Label>
//                   <div className="relative">
//                     <Input
//                       id="referral"
//                       placeholder="Enter referral name"
//                       value={formData.referral}
//                       onChange={e =>
//                         setFormData({ ...formData, referral: e.target.value })
//                       }
//                       className={`pl-10 ${
//                         errors.referral ? 'border-red-500' : ''
//                       }`}
//                     />
//                     <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                   </div>
//                   {errors.referral && (
//                     <p className="text-sm text-red-500">{errors.referral}</p>
//                   )}
//                 </div>
//               )}
//             </div>
//           </CardContent>

//           <CardFooter className="flex flex-col space-y-4">
//             <Button type="submit" className="w-full" disabled={isSubmitting}>
//               {isSubmitting ? 'Creating account...' : 'Create Account'}
//             </Button>

//             <p className="text-center text-sm text-muted-foreground">
//               Already have an account?{' '}
//               <Link
//                 to="/signin/student"
//                 className="text-primary hover:underline"
//               >
//                 Sign in
//               </Link>
//             </p>
//           </CardFooter>
//         </form>
//       </Card>
//     </AuthLayout>
//   );
// };

// export default SignUpStudent;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Lock,
  Building,
  Phone,
  Eye,
  EyeOff,
  Gift,
  UserPlus,
  ArrowRight,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import AuthLayout from '@/components/auth/AuthLayout';
import RoleToggle from '@/components/auth/RoleToggle';
import { useDispatch } from 'react-redux';
import { signUp } from '@/services/operations/authAPI';
import { AppDispatch } from '@/reducer/store';
import { NavigateFunction } from 'react-router-dom';

const SignUpStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    referral: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    referral: '',
  });

  const [hasReferral, setHasReferral] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      country: '',
      referral: '',
    };
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    const phoneRegex = /^\+?\d{10,14}$/;
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        variant: 'destructive',
        title: 'Form Error',
        description: 'Please fill in all required fields correctly',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const signupData = { ...formData };

      await dispatch(
        signUp(
          signupData.firstName,
          signupData.lastName,
          signupData.email,
          signupData.password,
          signupData.phone,
          signupData.country,
          signupData.referral || undefined,
          navigate
        )
      );

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        referral: '',
      });

      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        country: '',
        referral: '',
      });

      setHasReferral(false);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: error.message || 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RoleToggle activeRole="student" />

        <Card className="w-full bg-white shadow-xl border border-gray-100 overflow-hidden">
          <CardHeader className="text-center pb-6 bg-gradient-to-r from-[#1C8DEE]/5 to-blue-50">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1C8DEE] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#1C8DEE]/30">
                <UserPlus className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                Create Your Account
              </h1>
              <p className="text-gray-600 text-base">
                Join thousands of students achieving their study abroad dreams
              </p>
            </motion.div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5 px-8 py-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Label
                    htmlFor="firstName"
                    className="text-gray-700 font-medium"
                  >
                    First Name
                  </Label>
                  <div className="relative group">
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={e =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className={`pl-11 h-12 border-2 transition-all duration-300 focus:border-[#1C8DEE] focus:shadow-md focus:shadow-[#1C8DEE]/20 ${
                        errors.firstName
                          ? 'border-red-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                    <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-[#1C8DEE] transition-colors" />
                  </div>
                  {errors.firstName && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 ml-1"
                    >
                      {errors.firstName}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Label
                    htmlFor="lastName"
                    className="text-gray-700 font-medium"
                  >
                    Last Name
                  </Label>
                  <div className="relative group">
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={e =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className={`pl-11 h-12 border-2 transition-all duration-300 focus:border-[#1C8DEE] focus:shadow-md focus:shadow-[#1C8DEE]/20 ${
                        errors.lastName
                          ? 'border-red-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                    <User className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-[#1C8DEE] transition-colors" />
                  </div>
                  {errors.lastName && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 ml-1"
                    >
                      {errors.lastName}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Email */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileFocus="focus"
                variants={inputVariants}
              >
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <div className="relative group">
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={e =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className={`pl-11 h-12 border-2 transition-all duration-300 focus:border-[#1C8DEE] focus:shadow-md focus:shadow-[#1C8DEE]/20 ${
                      errors.email
                        ? 'border-red-400'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    required
                  />
                  <Mail className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-[#1C8DEE] transition-colors" />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 ml-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Password */}
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileFocus="focus"
                variants={inputVariants}
              >
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <div className="relative group">
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={e =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className={`pl-11 pr-11 h-12 border-2 transition-all duration-300 focus:border-[#1C8DEE] focus:shadow-md focus:shadow-[#1C8DEE]/20 ${
                      errors.password
                        ? 'border-red-400'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    required
                  />
                  <Lock className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-[#1C8DEE] transition-colors" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-gray-400 hover:text-[#1C8DEE] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-500 ml-1"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              {/* Contact Fields */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    WhatsApp Number
                  </Label>
                  <div className="relative group">
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1234567890"
                      value={formData.phone}
                      onChange={e =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className={`pl-11 h-12 border-2 transition-all duration-300 focus:border-[#1C8DEE] focus:shadow-md focus:shadow-[#1C8DEE]/20 ${
                        errors.phone
                          ? 'border-red-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                    <Phone className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-[#1C8DEE] transition-colors" />
                  </div>
                  {errors.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 ml-1"
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  whileFocus="focus"
                  variants={inputVariants}
                >
                  <Label
                    htmlFor="country"
                    className="text-gray-700 font-medium"
                  >
                    Country
                  </Label>
                  <div className="relative group">
                    <Input
                      id="country"
                      placeholder="Your country"
                      value={formData.country}
                      onChange={e =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className={`pl-11 h-12 border-2 transition-all duration-300 focus:border-[#1C8DEE] focus:shadow-md focus:shadow-[#1C8DEE]/20 ${
                        errors.country
                          ? 'border-red-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                    <Building className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-[#1C8DEE] transition-colors" />
                  </div>
                  {errors.country && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-500 ml-1"
                    >
                      {errors.country}
                    </motion.p>
                  )}
                </motion.div>
              </div>

              {/* Referral Section */}
              <motion.div
                className="space-y-4 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center space-x-3">
                  <motion.input
                    type="checkbox"
                    id="hasReferral"
                    checked={hasReferral}
                    onChange={e => setHasReferral(e.target.checked)}
                    className="h-5 w-5 text-[#1C8DEE] rounded border-2 border-gray-300 focus:ring-[#1C8DEE] focus:ring-2"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                  <Label
                    htmlFor="hasReferral"
                    className="text-gray-700 font-medium flex items-center cursor-pointer"
                  >
                    <Gift className="w-5 h-5 text-orange-500 mr-2" />I have a
                    referral code (Get extra benefits!)
                  </Label>
                </div>

                {hasReferral && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <Label
                      htmlFor="referral"
                      className="text-gray-700 font-medium"
                    >
                      Referral Code
                    </Label>
                    <div className="relative group">
                      <Input
                        id="referral"
                        placeholder="Enter referral name"
                        value={formData.referral}
                        onChange={e =>
                          setFormData({ ...formData, referral: e.target.value })
                        }
                        className={`pl-11 h-12 border-2 transition-all duration-300 focus:border-orange-400 focus:shadow-md focus:shadow-orange-400/20 ${
                          errors.referral
                            ? 'border-red-400'
                            : 'border-orange-200 hover:border-orange-300'
                        }`}
                      />
                      <Gift className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
                    </div>
                    {errors.referral && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-red-500 ml-1"
                      >
                        {errors.referral}
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </motion.div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-6 px-8 pb-8">
              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#1C8DEE] to-blue-600 hover:from-[#1C8DEE]/90 hover:to-blue-600/90 text-white font-semibold rounded-xl shadow-lg shadow-[#1C8DEE]/30 transition-all duration-300 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Creating your account...</span>
                    </div>
                  ) : (
                    <span className="flex items-center space-x-2">
                      <span>Create Account</span>
                      <motion.div
                        animate={{ x: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </span>
                  )}
                </Button>
              </motion.div>

              {/* Login Link */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link
                    to="/signin/student"
                    className="text-[#1C8DEE] hover:text-blue-600 font-semibold hover:underline transition-all duration-200"
                  >
                    Sign in here
                  </Link>
                </p>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-100"
              >
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <div className="w-8 h-8 bg-[#1C8DEE]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#1C8DEE] text-xs font-bold">⚡</span>
                  </div>
                  <span>Quick Setup</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xs font-bold">
                      🚀
                    </span>
                  </div>
                  <span>Global Ready</span>
                </div>
              </motion.div>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </AuthLayout>
  );
};

export default SignUpStudent;
