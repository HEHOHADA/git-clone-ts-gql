import { gql } from '@apollo/client'

export const repoInfoFragment = gql`
  fragment RepoInfo on Repository {
    name
    openGraphImageUrl
    description
    owner {
      login
    }
    defaultBranchRef {
      name
      target {
        __typename
        oid
      }
    }
    stargazers {
      totalCount
    }
    languages(first: 10) {
      edges {
        node {
          name
          color
        }
        size
      }
    }
    repositoryTopics(first: 10) {
      edges {
        node {
          topic {
            name
          }
        }
      }
    }
  }
`
