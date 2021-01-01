import { gql } from '@apollo/client'

export const searchByQuery = gql`
  query ($count: Int!, $type: SearchType!, $query: String!) {
    search(first: $count, type: $type, query: $query) {
      nodes {
        ...RepoInfo
        ...UserInfo
      }
    }
  }`
