import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsiteSlices';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
  },
});
