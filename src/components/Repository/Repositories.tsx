import React from 'react'
import { Repository } from '../../models/repository'
import ShortRepository, { RepositoryProps } from '../Repository/ShortRepository'

function Repositories({ repositories }: { repositories: Array<Repository> }) {
  return (
    <div>
      {repositories.map((repository: Repository) => (
        <ShortRepository data={repository} />
      ))}
    </div>
  )
}
export default Repositories
