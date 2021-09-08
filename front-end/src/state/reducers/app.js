const initialState = {
  asideEvent: '',
};

const pageNavigation = (state = initialState, action) => {
  switch (action.type) {

    case 'ASIDE_EVENT':
      return {
        ...state,
        asideEvent: action.payload.asideEvent,
      }

    default:
      return state;
  }
};

export default pageNavigation;
