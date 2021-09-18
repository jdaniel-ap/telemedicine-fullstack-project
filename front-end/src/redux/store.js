import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appSlice from './slices/appSlice'


export default configureStore({
  reducer: {
    authentication: authSlice,
    appEvents: appSlice 
  }
});
