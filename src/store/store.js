import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth.slice';
import { navbarSlice } from './navbar.slice';

export const store = configureStore({
  reducer: {
    authLogin: authSlice.reducer,
    navbars: navbarSlice.reducer
  },
});
