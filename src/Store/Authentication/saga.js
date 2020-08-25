import { put, takeEvery, fork, all, call } from "redux-saga/effects";
import actionAuth, { SIGN_UP, LOGIN } from "./action";
import { createWithEmail, signInWithEmail } from "../../Services/firebase";
import firebase from "firebase";

const delay = (ms) =>
  new Promise((res) => {
    console.log("=====delay====", ms);
    setTimeout(res, ms);
  });

function* signUp({ payload }) {
  try {
    let { email, password } = payload;

    yield put(actionAuth.startSignUp());
    yield console.log("===1===");

    yield delay(3000);

    yield console.log("===2===");
    yield call(createWithEmail, email, password);
    yield put(actionAuth.signUpSUCCESS());

    console.log("===SAGA=====SIGN_UP_SUCCESS======");
  } catch (error) {
    console.log("===SAGA=====SIGN_UP_FAIL======");
    console.log(error);
    yield put(actionAuth.signUpFail(error.message));
  }
}

function* watchSigUp() {
  yield takeEvery(SIGN_UP, signUp);
}
//=========================================

function* signIn({ payload }) {
  try {
    let { email, password } = payload;

    yield put(actionAuth.startLogin());

    yield delay(20000); //test loading at components

    yield call(signInWithEmail, email, password);
    yield put(actionAuth.loginSuccess());

    console.log("===SAGA=====SIGN_IN_SUCCESS======");
  } catch (error) {
    console.log("===SAGA=====SIGN_IN_FAIL======");
    console.log(error);
    yield put(actionAuth.signUpFail(error.message));
  }
}

function* watchSigIn() {
  yield takeEvery(LOGIN, signIn);
}

function* authSaga() {
  yield all([fork(watchSigUp), fork(watchSigIn)]);
}

export default authSaga;
