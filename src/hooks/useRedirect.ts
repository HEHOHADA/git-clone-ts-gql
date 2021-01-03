import { useHistory } from 'react-router-dom'

export const useRedirect = () => {
  const history = useHistory()

  const historyPush = (url: string) => {
    history.push(url)
  }

  return {
    historyPush
  }
}
