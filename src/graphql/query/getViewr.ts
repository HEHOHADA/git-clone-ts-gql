import gql from 'graphql-tag'
import { repoInfoFragment } from '../fragments/repoInfo'

export const getViewerRepos = gql`
    query GetViewerRepos {
        viewer {
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
