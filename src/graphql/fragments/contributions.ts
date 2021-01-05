import { gql } from '@apollo/client'

export const contrInfoFragment = gql`
  fragment ContrInfo on ContributionsCollection {
    commitContributionsByRepository(maxRepositories: 5) {
      repository {
        nameWithOwner
      }
      contributions(first:5){
        nodes {
          commitCount
          occurredAt
        }
      }
    }
    issueContributionsByRepository(maxRepositories: 5) {
      repository {
        nameWithOwner
      }
      contributions(first:5){
        nodes {
          occurredAt
        }
      }
    }
    pullRequestContributionsByRepository(maxRepositories: 5) {
      repository {
        nameWithOwner
      }
      contributions(first:5){
        nodes {
          occurredAt
        }
      }
    }
    pullRequestReviewContributionsByRepository(maxRepositories: 5) {
      repository {
        nameWithOwner
      }
      contributions(first:5){
        nodes {
          occurredAt
        }
      }
    }
  }
`
