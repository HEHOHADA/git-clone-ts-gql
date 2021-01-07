import { gql } from '@apollo/client'

export const getRepoQuery = gql`
  query GetRepo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...RepoInfo
      object(expression: "master:") {
        ... on Tree {
          entries {
            oid
            extension
            name
          }
        }
      }
    }
  }
`
