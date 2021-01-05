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
      contributionsCollection(from: "2020-05-04T00:00:00" to: "2020-12-05T00:00:00") {
        ...ContrInfo
      }
    }
  }
`
