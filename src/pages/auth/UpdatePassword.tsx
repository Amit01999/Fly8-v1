import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import {
  Eye,
  EyeOff,
  ArrowLeft,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { resetPassword } from '@/services/operations/authAPI';
import { RootState, AppDispatch } from '../../reducer/store';

interface FormData {
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

type PasswordStrength = 'weak' | 'medium' | 'good' | 'strong';

interface PasswordRequirement {
  text: string;
  met: boolean;
}

const UpdatePassword: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { loading } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [token, setToken] = useState<string>('');

  const { password, confirmPassword } = formData;

  // Extract and validate token on component mount
  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const extractedToken = pathSegments[pathSegments.length - 1];

    if (!extractedToken || extractedToken.length < 10) {
      toast.error('Invalid or missing reset token');
      navigate('/forgot-password');
      return;
    }

    setToken(extractedToken);
  }, [location.pathname, navigate]);

  // Password strength checker
  const getPasswordStrength = (password: string): PasswordStrength => {
    if (password.length < 8) return 'weak';

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const score = [
      hasLowerCase,
      hasUpperCase,
      hasNumbers,
      hasSpecialChar,
    ].filter(Boolean).length;

    if (score < 2) return 'weak';
    if (score < 3) return 'medium';
    if (score < 4) return 'good';
    return 'strong';
  };

  // Password requirements checker
  const getPasswordRequirements = (password: string): PasswordRequirement[] => [
    { text: 'At least 8 characters', met: password.length >= 8 },
    { text: 'One lowercase letter', met: /[a-z]/.test(password) },
    { text: 'One uppercase letter', met: /[A-Z]/.test(password) },
    { text: 'One number', met: /\d/.test(password) },
    {
      text: 'One special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ];

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    if (name === 'password' && password) {
      const newErrors = { ...errors };
      if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters long';
      } else {
        delete newErrors.password;
      }
      setErrors(newErrors);
    }

    if (name === 'confirmPassword' && confirmPassword) {
      const newErrors = { ...errors };
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      } else {
        delete newErrors.confirmPassword;
      }
      setErrors(newErrors);
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors before submitting');
      return;
    }

    if (!token) {
      toast.error('Invalid reset token');
      return;
    }

    // Additional security check
    const strength = getPasswordStrength(password);
    if (strength === 'weak') {
      toast.error('Please choose a stronger password');
      return;
    }

    dispatch(resetPassword(password, confirmPassword, token, navigate));
  };

  const passwordStrength = getPasswordStrength(password);
  const passwordRequirements = getPasswordRequirements(password);
  const strengthColors = {
    weak: '#ef4444',
    medium: '#f59e0b',
    good: '#3b82f6',
    strong: '#10b981',
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-5 box-border  bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      {loading ? (
        <div className="flex flex-col items-center gap-4 text-gray-700">
          <div className="w-10 h-10 border-3 border-gray-300 border-t-blue-400 rounded-full animate-spin" />
          <p className="text-lg font-medium">Resetting your password...</p>
        </div>
      ) : (
        <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Choose New Password
            </h1>
            <p className="text-gray-600">
              Almost done. Enter your new password and you're all set.
            </p>
          </div>

          <form onSubmit={handleOnSubmit} noValidate className="space-y-5">
            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  onBlur={handleOnBlur}
                  placeholder="Enter Password"
                  className={`w-full px-3 pr-11 py-3 border-2 rounded-lg text-base transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-400 ${
                    errors.password
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-gray-300'
                  }`}
                  aria-describedby={
                    errors.password ? 'password-error' : 'password-requirements'
                  }
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 rounded p-1 transition-colors duration-200"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-1">
                    <div
                      className="h-full transition-all duration-300 rounded-full"
                      style={{
                        width: `${
                          passwordStrength === 'weak'
                            ? 25
                            : passwordStrength === 'medium'
                            ? 50
                            : passwordStrength === 'good'
                            ? 75
                            : 100
                        }%`,
                        backgroundColor: strengthColors[passwordStrength],
                      }}
                    />
                  </div>
                  <span
                    className="text-xs font-medium"
                    style={{ color: strengthColors[passwordStrength] }}
                  >
                    Password strength:{' '}
                    {passwordStrength.charAt(0).toUpperCase() +
                      passwordStrength.slice(1)}
                  </span>
                </div>
              )}

              {/* Password Requirements */}
              {password && (
                <div
                  id="password-requirements"
                  className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  <p className="text-xs font-medium text-gray-700 mb-2">
                    Password must contain:
                  </p>
                  <ul className="space-y-1">
                    {passwordRequirements.map((requirement, index) => (
                      <li
                        key={index}
                        className={`flex items-center gap-2 text-xs transition-colors duration-200 ${
                          requirement.met ? 'text-green-600' : 'text-red-500'
                        }`}
                      >
                        {requirement.met ? (
                          <CheckCircle2 size={14} />
                        ) : (
                          <XCircle size={14} />
                        )}
                        {requirement.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {errors.password && (
                <div
                  id="password-error"
                  className="flex items-center gap-2 text-red-500 text-sm mt-2"
                  role="alert"
                >
                  <AlertCircle size={16} />
                  {errors.password}
                </div>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleOnChange}
                  onBlur={handleOnBlur}
                  placeholder="Confirm Password"
                  className={`w-full px-3 pr-11 py-3 border-2 rounded-lg text-base transition-all duration-200 focus:outline-none focus:ring-3 focus:ring-blue-100 focus:border-blue-500 ${
                    errors.confirmPassword
                      ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                      : 'border-gray-300'
                  }`}
                  aria-describedby={
                    errors.confirmPassword
                      ? 'confirm-password-error'
                      : undefined
                  }
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(prev => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 rounded p-1 transition-colors duration-200"
                  aria-label={
                    showConfirmPassword
                      ? 'Hide confirm password'
                      : 'Show confirm password'
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <div
                  id="confirm-password-error"
                  className="flex items-center gap-2 text-red-500 text-sm mt-2"
                  role="alert"
                >
                  <AlertCircle size={16} />
                  {errors.confirmPassword}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={
                loading ||
                !password ||
                !confirmPassword ||
                Object.keys(errors).length > 0
              }
              className={`w-full py-3.5 px-4 text-base font-semibold rounded-lg transition-all duration-200 mt-6 focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                loading ||
                !password ||
                !confirmPassword ||
                Object.keys(errors).length > 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : ' bg-gradient-to-r from-primary to-secondary  text-black hover:bg-blue-500 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md'
              }`}
            >
              {loading ? 'Resetting Password...' : 'Reset Password'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/signin/student"
              className="inline-flex items-center gap-2 text-gray-700 hover:text-black text-sm font-medium px-3 py-2 rounded-md hover:bg-blue-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <ArrowLeft size={16} /> Back To Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
