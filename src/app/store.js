import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../components/projectForm/formSlice.js';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
