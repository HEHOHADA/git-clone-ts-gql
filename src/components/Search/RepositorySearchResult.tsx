import React, { FC } from 'react'
import { Repository } from '../../types/repository'
import { Repositories } from '../Repository/Repositories'

const repositories: Array<Repository> = []

type PropsType = { input: string }

export const RepositorySearchResult: FC<PropsType> = ({input}) => (
  <div>
    <Repositories search={ '' } repositories={ repositories as any }/>
  </div>
)
