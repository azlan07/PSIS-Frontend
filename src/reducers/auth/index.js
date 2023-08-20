import {
  LOGIN_USERS,
  WHO_AM_I
} from "../../actions/authActions";

const initialState = {
  loginUsersResult: false,
  loginUsersLoading: false,
  loginUsersError: false,

  whoAmIResult: false,
  whoAmILoading: false,
  whoAmIError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USERS:
      return {
        ...state,
        loginUsersResult: action.payload.data,
        loginUsersLoading: action.payload.loading,
        loginUsersError: action.payload.errorMessage,
      };

    case WHO_AM_I:
      return {
        ...state,
        whoAmIResult: action.payload.data,
        whoAmILoading: action.payload.loading,
        whoAmIError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default authReducer;

