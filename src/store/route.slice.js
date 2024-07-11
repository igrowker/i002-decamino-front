import { createSlice } from '@reduxjs/toolkit';

export const routeSlice = createSlice({
  name: 'route',
  initialState: {
    startLocation: [0,0],
    endLocation: [0,0],
  },
  reducers: {
    setStartLocation: (state, action) => {
      state.startLocation = action.payload;
    },
    setEndLocation: (state, action) => {
      state.endLocation = action.payload;
    },
  },
});

export const { setStartLocation, setEndLocation } = routeSlice.actions;

