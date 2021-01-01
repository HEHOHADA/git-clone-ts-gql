import { gql } from '@apollo/client'
export const getUserDetail = gql`
  query GetUserDetail($login: String!) {
    user(login: $login) {
      repositories(first: 20, orderBy: { field: PUSHED_AT, direction: DESC }) {
        totalCount
        edges {
          node {
            ...RepoInfo
          }
        }
      }
      ...UserInfo
    }
  }
`
