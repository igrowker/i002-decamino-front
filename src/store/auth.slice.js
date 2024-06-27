// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  token: '', 
  user: {}
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },

    logout: (state) => {
      state.token = '';
      state.user = {};
    },

    setToken: (state, action) => { 
      state.token = action.payload;
    },

    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

  },
});

export const { login, logout, setToken,updateUser } = authSlice.actions;