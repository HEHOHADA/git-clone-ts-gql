import React from 'react'
import { Repository } from '../../types/repository'
import ShortRepository from '../Repository/ShortRepository'

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
