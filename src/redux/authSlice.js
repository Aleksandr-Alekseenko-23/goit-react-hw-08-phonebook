import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [register.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [login.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [login.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [login.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
    [logout.pending]: state => ({
      ...state,
      isLoading: true,
      error: null,
    }),
    [logout.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    },
    [logout.rejected]: (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }),
  },
});

export const authReducer = authSlice.reducer;
