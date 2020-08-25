const { default: authSaga } = require("./Authentication/saga");
const { all, fork } = require("redux-saga/effects");

function* rootSaga() {
  yield all([fork(authSaga)]);
}

export default rootSaga;
