import {
  CommitContributionsByRepository,
  CreatedCommitContribution,
  CreatedIssueContribution,
  CreatedPullRequestContribution,
  CreatedPullRequestReviewContribution,
  IssueContributionsByRepository,
  PullRequestContributionsByRepository,
  PullRequestReviewContributionsByRepository
} from '../generated/graphql'

export type ContributionType =
  CommitContributionsByRepository
  | IssueContributionsByRepository
  | PullRequestContributionsByRepository
  | PullRequestReviewContributionsByRepository

export type ContributionItemType =
  CreatedCommitContribution
  | CreatedIssueContribution
  | CreatedPullRequestContribution
  | CreatedPullRequestReviewContribution
export type ContributionKeys = 'commitContributionsByRepository'
  | 'issueContributionsByRepository'
  | 'pullRequestContributionsByRepository'
  | 'pullRequestReviewContributionsByRepository'
