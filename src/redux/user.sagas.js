import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { createUser, getUsers, removeUser, updateUser } from "../api";
import { createUserFail, createUserSuccess, deleteUserFail, deleteUserSuccess, loadUserFail, loadUserSuccess, updateUserFail, updateUserSuccess } from "./user.actions";
import UserActionTypes from "./user.types";



export function* fetchUser() {
  try {
    delay(500);
    const response = yield call(getUsers, "");
    console.log("response-saga=>", response);
    yield put(loadUserSuccess(response.data));
  } catch (error) {
    yield put(loadUserFail(error.message));
  }
}

export function* createUserAsync({ payload: { first, last, email, phone, address, location, hobby } }) {
  try {
    const response = yield call(createUser, {first, last, email, phone, address, location, hobby});
    console.log(response)
    if (response.status === 201 && response.status < 300) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserFail(error.message));
  }
  
}

export function* deleteUserStartAsync({ payload: { _id } }) {
  try {
    const response = yield call(removeUser, _id);
   
    if (response.status === 200 && response.status < 300) {
      yield put(deleteUserSuccess(_id));
    }
  } catch (error) {
    yield put(deleteUserFail(error.message));
  }
}

export function* updateUserStartAsync({ payload: { _id, first, last, email, phone, location, hobby } }) {
  try {
    const response = yield call(updateUser, _id, { first, last, email, phone, location, hobby  });
    if (response.status === 200 && response.status < 300) {
      console.log(response)
      yield put(updateUserSuccess({_id: _id, first: first, last: last, email: email, phone: phone, location: location}));
    }
  } catch (error) {
    yield put(updateUserFail(error.message));
  }
  console.log(_id, first, last, email, phone, location, hobby)
}

export function* fetchUserStart() {
  yield takeLatest(UserActionTypes.LOAD_USER_START, fetchUser);
}

export function* createUserStart() {
  yield takeLatest(UserActionTypes.CREATE_USER_START, createUserAsync);
}

export function* deleteUserStart() {
  yield takeLatest(UserActionTypes.DELETE_USER_START, deleteUserStartAsync);
}

export function* updateUserStart() {
  yield takeLatest(UserActionTypes.UPDATE_USER_START, updateUserStartAsync);
}

export default function* rootSaga() {
  yield all([
    call(fetchUserStart),
    call(createUserStart),
    call(deleteUserStart),
    call(updateUserStart),
  ]);
}
