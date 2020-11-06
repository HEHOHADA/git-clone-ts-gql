import React, { FC } from 'react'
import { User } from '../../types/user'
import { ShortUser } from './ShortUser'


type PropsType = {
  users: Array<User>
}

export const Users: FC<PropsType> = ({users}) => {
  return (
    <div>
      { users.map((user: User) => (
        <ShortUser key={ user.id } data={ user }/>
      )) }
    </div>
  )
}

