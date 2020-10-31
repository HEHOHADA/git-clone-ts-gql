import { tokenKeyName } from '../utils/config'

export function setTokeValue(value = '') {
  localStorage.setItem(tokenKeyName, value)
}

export function getTokenValue() {
  return localStorage.getItem(tokenKeyName)
}
