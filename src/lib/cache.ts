import { SearchResultItemConnection } from '../generated/graphql'

export const cacheConfig = {
  typePolicies: {
    Query: {
      fields: {
        search: {
          merge(
            existing: SearchResultItemConnection,
            incoming: SearchResultItemConnection
          ): SearchResultItemConnection {
            return {
              ...incoming
            }
          }
        }
      }
    },
  }
}
