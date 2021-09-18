import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  asideEvents: '',
  userData: { username: '', email: '', fullname: '', id: ''}
}

const slice = createSlice({
  name: 'appEvents',
  initialState,
  reducers: {
    setAsideEvent(state, { payload }) {
      return { ...state, asideEvents: payload }
    },
    setUser(state, { payload }) {
      return { ...state, userData: { ...payload }}
    },
    editUser(state, { payload }) {
      const { name, value } = payload
      return { ...state, userData: {...state.userData, [name]:value }}
    }
  }
});

export const { setAsideEvent, setUser, editUser } = slice.actions;

export default slice.reducer