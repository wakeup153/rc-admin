import { take } from 'redux-saga/effects'

const loginSaga = function* () {
  while(true) {
    const action = yield take('LOGIN')
    console.log('loginhaha', action)
  }
}

export default {
  loginSaga,
}