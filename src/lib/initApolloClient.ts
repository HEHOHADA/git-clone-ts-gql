// eslint-disable-next-line max-len
import { ApolloClient, ApolloReducerConfig, createHttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

let apolloClient: ApolloClient<NormalizedCacheObject>
export const GITHUB_LINK_OPTIONS = {uri: 'https://api.github.com/graphql'}

function create(
  initialState?: NormalizedCacheObject,
  cacheConfig: ApolloReducerConfig = {}
): ApolloClient<NormalizedCacheObject> {
  const httpLink = createHttpLink(GITHUB_LINK_OPTIONS)

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${ process.env.REACT_APP_GITHUB_ACCESS_TOKEN }`,
      },
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(cacheConfig).restore(initialState || {}),
  })
}

export default function initApollo(
  initialState?: NormalizedCacheObject,
  cacheConfig: ApolloReducerConfig = {}
): ApolloClient<NormalizedCacheObject> {

  if (!apolloClient) {
    apolloClient = create(
      initialState,
      cacheConfig
    )
  }

  return apolloClient
}

