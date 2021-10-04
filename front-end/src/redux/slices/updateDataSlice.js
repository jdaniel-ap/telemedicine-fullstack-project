import { createSlice  } from '@reduxjs/toolkit';
import { basicUserDataDefault } from '../defaultStates'

const initialState = {
  ...basicUserDataDefault
}

const slice = createSlice({
  name: 'updateData',
  initialState,
  reducers: {
    setUserData(state, { payload }) {
      const { name, value, type } = payload;
      const typeValue = type === 'text' ? value : Number(value);

      return { ...state, userData: { ...state.userData, [name]: typeValue } }
    },
    setHealthData(state, { payload }) {
      const { name, value, checked, type } = payload;
      const typeValue = type === 'checkbox' ? checked : value;
      return { ...state, healthData: { ...state.healthData, [name]: typeValue }}
    },
    setDefaultData(_state, { payload }) {
      const { healthData, userData } = payload;
      return {userData, healthData}
    },
    resetUserData(_state, { payload }) {
      const { userData, healthData } = payload.defaultState;
      return {userData, healthData}
    },
    resetData() {
      return {...basicUserDataDefault}
    }
  }
});

export const { setUserData, setHealthData, setDefaultData, resetUserData, resetData } = slice.actions;

export default slice.reducer;
