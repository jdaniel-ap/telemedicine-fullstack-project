const initialState = {
  signIn: false,
  signUp: false,
  serverResponse: {},
  loginFormValues: {},
  signUpValues: {medicRole: false},
};

const pageNavigation = (state = initialState, action) => {
  switch (action.type) {

    case 'SIGNIN_STATE':
      return {
        ...state,
        signIn: state.signIn ? false : true,
      }
    
    case 'SIGNUP_STATE':
      return {
        ...state,
        signUp: state.signUp ? false : true,
      }

    case 'SET_SIGNUP_VALUES':
      return {
        ...state,
        signUpValues: {...action.payload}
      }

    default:
      return state;
  }
};

export default pageNavigation;
