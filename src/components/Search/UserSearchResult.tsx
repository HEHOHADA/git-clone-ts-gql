import React, { FC } from 'react'
import { User } from '../../types/user'
import { Users } from '../User/Users'

const users: Array<User> = []

type PropsType = {
  input: string
}

export const UserSearchResult: FC<PropsType> = ({input}) => {
  return (
    <div>
      <Users users={ users }/>
    </div>
  )
}
