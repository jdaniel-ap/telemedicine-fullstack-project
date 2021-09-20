import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appSlice from './slices/appSlice';
import userDataSlice from './slices/updateDataSlice';


export default configureStore({
  reducer: {
    authentication: authSlice,
    appEvents: appSlice,
    userMedicData: userDataSlice,
  }
});
