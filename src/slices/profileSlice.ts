import { createSlice } from '@reduxjs/toolkit';

// Safely parse user from localStorage
const getUserFromLocalStorage = () => {
  try {
    const userString = localStorage.getItem('user');
    if (userString && userString !== 'undefined' && userString !== 'null') {
      return JSON.parse(userString);
    }
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    localStorage.removeItem('user'); // Clear invalid data
  }
  return null;
};

const initialState = {
  user: getUserFromLocalStorage(),
  loading: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,

  reducers: {
    setUser(state, value) {
      state.user = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
  },
});

export const { setUser, setLoading } = profileSlice.actions;
export default profileSlice.reducer;
