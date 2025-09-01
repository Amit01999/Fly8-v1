// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { User, Mail, Lock, Building, GraduationCap, Phone } from 'lucide-react';
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
// import { useNavigate } from 'react-router-dom';
// import { setSignupData } from '@/slices/authSlice';
// import { sendOtp } from '@/services/operations/authAPI';
// import { AppDispatch } from '@/reducer/store';

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
//     referral: '', // Add referral to formData
//   });
//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phone: '',
//     country: '',
//     referral: '', // Add referral to errors
//   });
//   const [hasReferral, setHasReferral] = useState(false); // Add state for checkbox
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

//     // Validate firstName
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//       isValid = false;
//     }

//     // Validate lastName
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//       isValid = false;
//     }

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//       isValid = false;
//     }

//     // Validate password
//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       isValid = false;
//     }

//     // Validate phone
//     const phoneRegex = /^\+?\d{10,14}$/;
//     if (!formData.phone) {
//       newErrors.phone = 'Phone number is required';
//       isValid = false;
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid phone number';
//       isValid = false;
//     }

//     // Validate country
//     if (!formData.country.trim()) {
//       newErrors.country = 'Country is required';
//       isValid = false;
//     }
//     // Validate referral if checkbox is checked
//     if (hasReferral && !formData.referral.trim()) {
//       newErrors.referral = 'Referral code is required when selected';
//       isValid = false;
//     }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async e => {
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
//       dispatch(setSignupData(formData));
//       await dispatch(sendOtp({ email: formData.email, navigate }));

//       setFormData({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         phone: '',
//         country: '',
//       });
//       setErrors({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         phone: '',
//         country: '',
//       });
//     } catch (error) {
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
//             <GraduationCap className="w-12 h-12 mx-auto text-primary" />
//             <h1 className="text-2xl font-bold">Create Student Account</h1>
//             <p className="text-muted-foreground">
//               Join Fly8 to explore global education opportunities
//             </p>
//           </motion.div>
//         </CardHeader>

//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
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
import { User, Mail, Lock, Building, GraduationCap, Phone } from 'lucide-react';
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
import { setSignupData } from '@/slices/authSlice';
import { sendOtp } from '@/services/operations/authAPI';
import { AppDispatch } from '@/reducer/store';

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
      // Always include referral (even if empty string)
      const signupData = { ...formData };

      dispatch(setSignupData(signupData));

      await dispatch(sendOtp({ email: formData.email, navigate }));

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

  return (
    <AuthLayout>
      <RoleToggle activeRole="student" />
      <Card className="w-full">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-2"
          >
            <GraduationCap className="w-12 h-12 mx-auto text-primary" />
            <h1 className="text-2xl font-bold">Create Student Account</h1>
            <p className="text-muted-foreground">
              Join Fly8 to explore global education opportunities
            </p>
          </motion.div>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <div className="relative">
                  <Input
                    id="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={e =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className={`pl-10 ${
                      errors.firstName ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.firstName && (
                  <p className="text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <div className="relative">
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={e =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className={`pl-10 ${
                      errors.lastName ? 'border-red-500' : ''
                    }`}
                    required
                  />
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
                {errors.lastName && (
                  <p className="text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                  required
                />
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={e =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className={`pl-10 ${errors.password ? 'border-red-500' : ''}`}
                  required
                />
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">WhatsApp Number</Label>
              <div className="relative">
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1234567890"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={`pl-10 ${errors.phone ? 'border-red-500' : ''}`}
                  required
                />
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Country */}
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <div className="relative">
                <Input
                  id="country"
                  placeholder="Enter your country name"
                  value={formData.country}
                  onChange={e =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  className={`pl-10 ${errors.country ? 'border-red-500' : ''}`}
                  required
                />
                <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              </div>
              {errors.country && (
                <p className="text-sm text-red-500">{errors.country}</p>
              )}
            </div>

            {/* Referral */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="hasReferral"
                  checked={hasReferral}
                  onChange={e => setHasReferral(e.target.checked)}
                  className="h-4 w-4 text-primary"
                />
                <Label htmlFor="hasReferral">I have a referral code</Label>
              </div>

              {hasReferral && (
                <div className="space-y-2">
                  <Label htmlFor="referral">Referral Code</Label>
                  <div className="relative">
                    <Input
                      id="referral"
                      placeholder="Enter referral name"
                      value={formData.referral}
                      onChange={e =>
                        setFormData({ ...formData, referral: e.target.value })
                      }
                      className={`pl-10 ${
                        errors.referral ? 'border-red-500' : ''
                      }`}
                    />
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  </div>
                  {errors.referral && (
                    <p className="text-sm text-red-500">{errors.referral}</p>
                  )}
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link
                to="/signin/student"
                className="text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </AuthLayout>
  );
};

export default SignUpStudent;

// export function signUp(
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string,
//   phone: string,
//   country: string,
//   otp: string,
//   navigate: NavigateFunction
// ) {
//   return async (dispatch: Dispatch) => {
//     const toastId = toast.loading('Loading...');
//     dispatch(setAuthLoading(true));

//     try {
//       const response = await apiConnector('POST', SIGNUP_API, {
//         firstName,
//         lastName,
//         email,
//         password,
//         phone,
//         country,
//         otp,
//       });

//       console.log('SIGNUP API RESPONSE............', response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success('Signup Successful');
//       navigate('/signin/student');
//     } catch (error: any) {
//       console.log('SIGNUP API ERROR............', error);
//       toast.error(error?.response?.data?.message || 'Signup Failed');
//       navigate('/signup');
//     }

//     dispatch(setAuthLoading(false));
//     toast.dismiss(toastId);
//   };
// }
// export function signUp(
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string,
//   phone: string,
//   country: string,
//   referral: string | undefined, // Add optional referral parameter
//   otp: string,
//   navigate: NavigateFunction
// ) {
//   return async (dispatch: Dispatch) => {
//     const toastId = toast.loading('Loading...');
//     dispatch(setAuthLoading(true));

//     try {
//       const response = await apiConnector('POST', SIGNUP_API, {
//         firstName,
//         lastName,
//         email,
//         password,
//         phone,
//         country,
//         referral, // Include referral in API payload
//         otp,
//       });

//       console.log('SIGNUP API RESPONSE............', response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success('Signup Successful');
//       navigate('/signin/student');
//     } catch (error: any) {
//       console.log('SIGNUP API ERROR............', error);
//       toast.error(error?.response?.data?.message || 'Signup Failed');
//       navigate('/signup');
//     }

//     dispatch(setAuthLoading(false));
//     toast.dismiss(toastId);
//   };
// }
