import React, { FC, useEffect, useState } from 'react'
import { ShortRepository } from './ShortRepository'
import { RepositoryEdge } from '../../generated/graphql'

type PropsType = {
  repositories: Array<RepositoryEdge>
  search: string
}
export const Repositories: FC<PropsType> = ({repositories, search}) => {
  const [searchRepos, setSearchRepos] = useState<Array<RepositoryEdge>>(repositories)
  useEffect(() => {
    const newSearchState = repositories
      .filter(r => r?.node?.name.includes(search))
    setSearchRepos(newSearchState)
  }, [search, repositories])
  return (
    <div>
      { searchRepos.map((repository) => {
          return repository.node ?
            <ShortRepository key={ repository.node.name } data={ repository.node }/> :
            null
        }
      ) }
    </div>
  )
}
