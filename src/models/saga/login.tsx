import { take } from 'redux-saga/effects'

const loginSaga = function* () {
  while(true) {
    const action = yield take('LOGIN')
    console.log('loginAction', action)
  }
}

export default {
  loginSaga,
}