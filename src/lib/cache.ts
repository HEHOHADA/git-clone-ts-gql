import { SearchResultItemConnection } from '../generated/graphql'

export const cacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        search: {
          keyArgs: ['query'],
          merge(
            existing: SearchResultItemConnection | undefined,
            incoming: SearchResultItemConnection
          ): SearchResultItemConnection {
            return {
              ...incoming,
              nodes: [...(existing?.nodes || []), ...(incoming.nodes || [])]
            }
          }
        }
      }
    }
  }
}
