import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import mainReducer from './mainSlice'
import configSlice from './configSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    main: mainReducer,
    config: configSlice,
  },
});
