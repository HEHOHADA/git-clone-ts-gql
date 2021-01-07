import { tokenKeyName } from '../utils'

export function setTokeValue(value = '') {
  localStorage.setItem(tokenKeyName, value)
}

export function getTokenValue() {
  return localStorage.getItem(tokenKeyName)
}
