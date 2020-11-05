import React from 'react'
import { User } from '../../types/user'
import ShortUser from './ShortUser'
function Users({ users }: { users: Array<User> }) {
  return (
    <div>
      {users.map((user: User) => (
        <ShortUser key={user.id} data={user} />
      ))}
    </div>
  )
}
export default Users
