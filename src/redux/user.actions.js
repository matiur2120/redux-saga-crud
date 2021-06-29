import UserActionTypes from './user.types';

export const loadUserStart = () => ({
  type: UserActionTypes.LOAD_USER_START,
});
//Edit user load
export const loadEditUserStart = () => ({
  type: UserActionTypes.LOAD_EDIT_USER_START,
});

export const loadUserSuccess = (users) => ({
  type: UserActionTypes.LOAD_USER_SUCCESS,
  payload: users,
});

export const loadUserFail = (errorMsg) => ({
  type: UserActionTypes.LOAD_USER_FAIL,
  payload: errorMsg,
});

export const createUserStart = (user) => ({
  type: UserActionTypes.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = (user) => ({
  type: UserActionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFail = (errorMsg) => ({
  type: UserActionTypes.CREATE_USER_FAIL,
  payload: errorMsg,
});

export const deleteUserStart = (userDetail) => ({
  type: UserActionTypes.DELETE_USER_START,
  payload: userDetail,
});

export const deleteUserSuccess = (user) => ({
  type: UserActionTypes.DELETE_USER_SUCCESS,
  payload: user,
});

export const deleteUserFail = (errorMsg) => ({
  type: UserActionTypes.DELETE_USER_FAIL,
  payload: errorMsg,
});

export const updateUserStart = (userDetail) => ({
  type: UserActionTypes.UPDATE_USER_START,
  payload: userDetail,
});

export const updateUserSuccess = (userDetail) => ({
  type: UserActionTypes.UPDATE_USER_SUCCESS,
  payload: userDetail,
});

export const updateUserFail = (errorMsg) => ({
  type: UserActionTypes.UPDATE_USER_FAIL,
  payload: errorMsg,
});





export const setEditUser = (user) => ({
  type: UserActionTypes.SET_EDIT_USER,
  payload: user,
});
