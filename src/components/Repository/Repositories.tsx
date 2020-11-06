import React, { FC } from 'react'
import { Repository } from '../../types/repository'
import { ShortRepository } from './ShortRepository'

type PropsType = {
  repositories: Array<Repository>

}
export const Repositories: FC<PropsType> = ({repositories}) => {
  return (
    <div>
      { repositories.map((repository: Repository) => (
        <ShortRepository key={ repository.id } data={ repository }/>
      )) }
    </div>
  )
}
