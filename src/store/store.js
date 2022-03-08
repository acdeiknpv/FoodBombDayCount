import { configureStore } from '@reduxjs/toolkit';
import formReducer from './reducers/formSlice.js';

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
});
