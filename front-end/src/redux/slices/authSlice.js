import { createSlice } from "@reduxjs/toolkit";
import { signStateDefault, signupStateDefault } from '../defaultStates';

const initialState = {
  loginForm: {},
  signupValues: signupStateDefault,
  signState: signStateDefault,
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginForm(state, { payload }) {
      const { name, value } = payload;
      return {...state, loginForm: {...state.loginForm, [name]: value }}
    },
    setSignup(state, { payload }) {
      const { name, value } = payload;
      return {...state, signupValues: { ...state.signupValues, [name]: value }}
    },
    resetSignup(state, _action) {
      return { ...state, signState: {...signStateDefault}, signupValues: {...signupStateDefault }}
    },
    setSignState(state, { payload }) {
      return {  ...state, signState: { ...payload } }
    }
  }
});

export const { setLoginForm, setSignState, setSignup, resetSignup } =  slice.actions;

export default slice.reducer;

