export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isLoggedIn: true,
        userName: action.userName,
      };

    case 'SIGN_OUT':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
      };

    default:
      return state;
  }
};
