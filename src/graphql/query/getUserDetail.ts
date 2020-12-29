import { gql } from '@apollo/client'
import { repoInfoFragment } from '../fragments/repoInfo'

export const getUserDetail = gql`
    query GetUserDetail($login: String!) {
        organization(login: $login) {
            repositories(first: 20, orderBy: { field: PUSHED_AT, direction: DESC }) {
                totalCount
                edges {
                    node {
                        ...RepoInfo
                    }
                }
            }
        }
    }
    ${repoInfoFragment}
`
