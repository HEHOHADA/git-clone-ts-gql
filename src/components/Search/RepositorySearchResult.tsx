import React from 'react'
import { Repository } from '../../models/repository';
import Repositories from '../Repository/Repositories'
const repositories: Array<Repository> = [

]
const RepositorySearchResult = ({ input }: { input: string }) => (
  <div>
    <Repositories repositories={repositories}/>
  </div>
)
export default RepositorySearchResult
