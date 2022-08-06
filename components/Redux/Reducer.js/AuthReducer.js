import { Log_OUT, Sign_IN } from "../ActionType";

const initialState = {
  isLoggedIn: false,
  status: 0,
  user_id: 0,
  user_name: "",
  user_email: "",
  mobile: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case Sign_IN:

      return Object.assign({}, state, {
        isLoggedIn: true,
        status: action.payload.status,
        user_id: action.payload.user_id,
        user_email: action.payload.user_email,
        user_name: action.payload.user_name,
        mobile: action.payload.mobile,
      });
    case Log_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        status: 0,
        user_id: 0,
        user_name: "",
        user_email: "",
        mobile: "",
      });
    default:
      return state;
  }
};
export default AuthReducer;
