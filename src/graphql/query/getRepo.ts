import { gql } from '@apollo/client'
import { repoInfoFragment } from '../fragments/repoInfo'

export const getRepoQuery = gql`
    query GetRepo($owner: String!, $name: String!) {
        repository(owner: $owner, name: $name) {
            ...RepoInfo
        }
    }
    ${repoInfoFragment}
`
