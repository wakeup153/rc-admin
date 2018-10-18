import * as LoginTypes from '../actionTypes/login'

export interface InterfaceForLogin {
  type: LoginTypes.LOGIN,
  payload ?: object,
}

export interface InterfaceForLogout {
  type: LoginTypes.LOGOUT,
  payload ?: object,
}

export type loginAction = InterfaceForLogin | InterfaceForLogout

export const login = (payload: object): InterfaceForLogin => ({
  payload,
  type: LoginTypes.LOGIN,
})

export const logout = (payload: object): InterfaceForLogout => ({
  payload,
  type: LoginTypes.LOGOUT,
})