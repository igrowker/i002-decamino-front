import { createSlice } from '@reduxjs/toolkit';

export const routeSlice = createSlice({
  name: 'route',
  initialState: {
    startLocation: [-37.321574, -59.13271],
    endLocation: [-37.237982, -59.233475],
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

export default routeSlice.reducer;

// -37.321574, -59.13271)