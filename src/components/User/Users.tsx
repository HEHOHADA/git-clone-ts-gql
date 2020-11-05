import React from 'react'
import { User } from '../../models/user'
import ShortUser from './ShortUser'
function Users({ users }: { users: Array<User> }) {
  return (
    <div>
      {users.map((user: User) => (
        <ShortUser data={user} />
      ))}
    </div>
  )
}
export default Users
