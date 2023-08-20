import {
  ADD_LIST_USERS,
  EDIT_LIST_USERS,
  GET_DETAIL_LIST_USERS,
  GET_LIST_USERS,
  DELETE_LIST_USERS
} from "../../actions/userActions";

const initialState = {
  addUsersResult: false,
  addUsersLoading: false,
  addUsersError: false,

  editUsersResult: false,
  editUsersLoading: false,
  editUsersError: false,

  getDetailListUsersResult: false,
  getDetailListUsersLoading: false,
  getDetailListUsersError: false,

  getListUsersResult: false,
  getListUsersLoading: false,
  getListUsersError: false,

  deleteUsersResult: false,
  deleteUsersLoading: false,
  deleteUsersError: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST_USERS:
      return {
        ...state,
        addUsersResult: action.payload.data,
        addUsersLoading: action.payload.loading,
        addUsersError: action.payload.errorMessage,
      };

    case EDIT_LIST_USERS:
      return {
        ...state,
        editUsersResult: action.payload.data,
        editUsersLoading: action.payload.loading,
        editUsersError: action.payload.errorMessage,
      };

    case GET_DETAIL_LIST_USERS:
      return {
        ...state,
        getDetailListUsersResult: action.payload.data,
        getDetailListUsersLoading: action.payload.loading,
        getDetailListUsersError: action.payload.errorMessage,
      };

    case GET_LIST_USERS:
      return {
        ...state,
        getListUsersResult: action.payload.data,
        getListUsersLoading: action.payload.loading,
        getListUsersError: action.payload.errorMessage,
      };
    
    case DELETE_LIST_USERS:
      return {
        ...state,
        deleteUsersResult: action.payload.data,
        deleteUsersLoading: action.payload.loading,
        deleteUsersError: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default usersReducer;
