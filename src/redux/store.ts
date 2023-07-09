import {configureStore} from '@reduxjs/toolkit';
import GalleryReducer from './Slices/GallerySlice';

export const store = configureStore({
  reducer: {
    gallery: GalleryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
