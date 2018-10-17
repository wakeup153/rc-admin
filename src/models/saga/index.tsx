import { fork, all } from 'redux-saga/effects'
import login from './login'
const sagas = {
  ...login,
}
const sagaArrays: object[] = []
for (const k of Object.keys(sagas)) {
  sagaArrays.push(fork(sagas[k]))
}
export default function * rootSaga() {
  yield all([...sagaArrays])
}