import { gql } from '@apollo/client'

export const searchByQuery = gql`
  query SearchByQuery($count: Int!, $type: SearchType!, $query: String!, $cursor:String) {
    search(first: $count, type: $type, query: $query, after: $cursor) {
      nodes {
        ...RepoInfo
        ...UserInfo
      }
      edges {
        cursor
      }
    }
  }`
