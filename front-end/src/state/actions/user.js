export const SIGNIN_STATE = "SIGNIN_STATE";

export const SIGNUP_STATE = "SIGNUP_STATE";

export const SET_SIGNUP_VALUES = "SET_SIGNUP_VALUES";


export const setSignState = () => ({
  type: SIGNIN_STATE
});

export const setSignupValues = (data) => ({
  type: SET_SIGNUP_VALUES,
  user: data
});
