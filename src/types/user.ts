import { Repository } from './repository'

export interface User {
  id: number
  avatar: string
  name: string
  login: string
  repositories: Array<Repository>
}
