import React from 'react'
import Repositories from '../Repository/Repositories'
const RepositorySearchResult = ({ input }: { input: string }) => (
  <div>
    <Repositories
      repositories={[
        {
          owner: {
            login: 'user1'
          },
          name: 'Repository1',
          url: '',
          isStared: false,
          isLock: false
        },
        {
          owner: {
            login: 'User2'
          },
          name: 'Repository2',
          url: '',
          isStared: false,
          isLock: false
        }
      ]}
    />
  </div>
)
export default RepositorySearchResult
