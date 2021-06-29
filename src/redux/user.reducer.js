import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  user: "",
  deleteUser: "",
  editUser: "",
  updateUser: "",
  users: [],
  errorMsg: "",
  loading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOAD_USER_START:
    case UserActionTypes.CREATE_USER_START:
    case UserActionTypes.DELETE_USER_START:
    case UserActionTypes.UPDATE_USER_START:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case UserActionTypes.SET_EDIT_USER:
      return {
        ...state,
        editUser: action.payload,
      };
    case UserActionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case UserActionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        deleteUser: action.payload,
      };
    case UserActionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        updateUser: action.payload,
      };
    case UserActionTypes.LOAD_USER_FAIL:
    case UserActionTypes.CREATE_USER_FAIL:
    case UserActionTypes.DELETE_USER_FAIL:
    case UserActionTypes.UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
