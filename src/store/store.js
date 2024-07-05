import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth.slice";
import routeReducer from "./routeSlice";
import privacyReducer from "./privacySlice";
import modalReducer from './modalSlice'

export const store = configureStore({
  reducer: {
    authLogin: authSlice.reducer,
  },

  reducer: {
    route: routeReducer,
  },
  reducer: {
    privacy: privacyReducer,
  },
  reducer: {
    modal: modalReducer,
  },
});
