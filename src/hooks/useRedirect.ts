import { useHistory } from 'react-router-dom'
import { setTokeValue } from '../lib/localStorage'

export const useRedirect = () => {
  const history = useHistory()

  const historyPush = (url: string) => {
    history.push(url)
  }

  const onLogout = () => {
    setTokeValue('')
    historyPush('/login')
  }

  const goHome = () => {
    historyPush('/')
  }

  return {
    historyPush,
    onLogout,
    goHome
  }
}
