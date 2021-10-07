import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appSlice from './slices/appSlice';
import userDataSlice from './slices/updateDataSlice';
import consultSlice from './slices/consultSlice'


export default configureStore({
  reducer: {
    authentication: authSlice,
    appEvents: appSlice,
    userMedicData: userDataSlice,
    consult: consultSlice,
  }
});
