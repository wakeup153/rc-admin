import { loginAction } from '../actions/login'
import { loginInitState } from '../state'
import { LOGIN, LOGOUT } from '../actionTypes/login'

export interface InterfaceForStoreState {
  userName ?: string,
  passWord ?: string,
  id ?: string,
}

export default (state: InterfaceForStoreState = loginInitState, action: loginAction): InterfaceForStoreState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}