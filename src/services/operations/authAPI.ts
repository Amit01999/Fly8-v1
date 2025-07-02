import { toast } from 'react-hot-toast';
import { setAuthLoading, setToken } from '../../slices/authSlice';
// import { resetCart } from '../../slices/cartSlice';
import { setUser } from '../../slices/profileSlice';
import { apiConnector } from '../apiconnector';
import { endpoints } from '../apis';
import { NavigateFunction } from 'react-router-dom';
import { Dispatch } from 'redux';
import { useAppDispatch } from '@/hooks/redux/SelectorAndDispatchHooks';

/*
 const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })
           here "POST" Is request and LOGIN_API is api and input me (emali , password) hai so basically we are making
           a request("POST") to the API("LOGIN_API") and passing input (emali , password)
 
*/

export interface SendOtpParams {
  email: string;
  navigate: (path: string) => void;
}
const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  RESETPASSTOKEN_API,
  RESETPASSWORD_API,
} = endpoints;

export function sendOtp({ email, navigate }: SendOtpParams) {
  return async (dispatch: any) => {
    const toastId = toast.loading('Loading...');
    dispatch(setAuthLoading(true));
    try {
      const response = await apiConnector('POST', SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log('SENDOTP API RESPONSE............', response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success('OTP Sent Successfully');
      navigate('/phantom/verify-email');
    } catch (error) {
      console.log('SENDOTP API ERROR............', error);
      toast.error('Could Not Send OTP');
    }
    dispatch(setAuthLoading(false));
    toast.dismiss(toastId);
  };
}

export function signUp(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  country: string,
  otp: string,
  navigate: NavigateFunction
) {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Loading...');
    dispatch(setAuthLoading(true));

    try {
      const response = await apiConnector('POST', SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        phone,
        country,
        otp,
      });

      console.log('SIGNUP API RESPONSE............', response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success('Signup Successful');
      navigate('/phantom/signin/student');
    } catch (error: any) {
      console.log('SIGNUP API ERROR............', error);
      toast.error(error?.response?.data?.message || 'Signup Failed');
      navigate('/phantom/signup');
    }

    dispatch(setAuthLoading(false));
    toast.dismiss(toastId);
  };
}
export function login(
  email: string,
  password: string,
  navigate: NavigateFunction
) {
  return async (dispatch: Dispatch) => {
    const toastId = toast.loading('Loading...');
    dispatch(setAuthLoading(true));
    try {
      const response = await apiConnector('POST', LOGIN_API, {
        email,
        password,
      });
      console.log('LOGIN API RESPONSE............', response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      toast.success('Login Successful');
      console.log('Login dattt:', response.data.student);
      // navigate('/phantom/StudentDashboard/my-profile');
      dispatch(setToken(response.data.student.token));
      const userImage = `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.student.firstName} ${response.data.student.lastName}`;
      dispatch(setUser({ ...response.data.student, image: userImage }));

      localStorage.setItem(
        'token',
        JSON.stringify(response.data.student.token)
      );
      localStorage.setItem('user', JSON.stringify(response.data.student));
      navigate('/phantom/StudentDashboard/my-profile');
    } catch (error) {
      console.log('LOGIN API ERROR............', error);
      toast.error('Login Failed');
    }

    dispatch(setAuthLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return dispatch => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    toast.success('Logged Out');
    navigate('/phantom');
  };
}

// export function getPasswordResetToken(email, setEmailSent) {
//   return async dispatch => {
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector('POST', RESETPASSTOKEN_API, {
//         email,
//       });
//       console.log('RESET PASSWORD TOKEN RESPONSE....', response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }

//       toast.success('Reset Email Sent');
//       setEmailSent(true);
//     } catch (error) {
//       console.log('RESET PASSWORD TOKEN Error', error);
//       toast.error('Failed to send email for resetting password');
//     }
//     dispatch(setLoading(false));
//   };
// }

// export function resetPassword(password, confirmPassword, token) {
//   return async dispatch => {
//     dispatch(setLoading(true));
//     try {
//       const response = await apiConnector('POST', RESETPASSWORD_API, {
//         password,
//         confirmPassword,
//         token,
//       });
//       console.log('RESET Password RESPONSE ... ', response);

//       if (!response.data.success) {
//         throw new Error(response.data.message);
//       }
//       toast.success('Password has been reset successfully');
//     } catch (error) {
//       console.log('RESET PASSWORD TOKEN Error', error);
//       toast.error('Unable to reset password');
//     }
//     dispatch(setLoading(false));
//   };
// }
