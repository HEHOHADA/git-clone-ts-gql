import React from 'react'
import { User } from '../../types/user'
import Users from '../User/Users'
const users: Array<User> = []
const UserSearchResult = ({ input }: { input: string }) => (
  <div>
    <Users users={users} />
  </div>
)
export default UserSearchResult
