import { gql } from '@apollo/client'

export const userInfoFragment = gql`
  fragment UserInfo on User {
    login
    url
    avatarUrl
    bio
    followers {
      totalCount
    }
    following {
      totalCount
    }
  }
`
