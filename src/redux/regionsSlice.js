import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedRegion: null,
};

const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
});

export const { setRegion } = regionsSlice.actions;

export default regionsSlice.reducer;
