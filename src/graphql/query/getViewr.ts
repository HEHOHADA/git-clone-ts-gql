import { gql } from '@apollo/client'

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
`
