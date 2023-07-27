import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './regionsSlice';

const store = configureStore({
  reducer: {
    regions: regionsReducer,
  },
});

export default store;
