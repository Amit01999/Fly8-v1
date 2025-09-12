import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  referral?: string; // Add optional referral field
}

interface AuthState {
  signupData?: SignupData | null;
  loading: boolean;
  token: string | null;
}

const initialState: AuthState = {
  signupData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    referral: '', // Initialize referral as empty string
  },
  loading: false,
  token: localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token') as string)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setSignupData(state, action: PayloadAction<SignupData>) {
      state.signupData = action.payload;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});

export const { setSignupData, setAuthLoading, setToken } = authSlice.actions;
export default authSlice.reducer;
