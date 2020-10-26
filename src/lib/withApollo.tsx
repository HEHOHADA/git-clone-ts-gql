import React, { FC } from 'react'
import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client'
import initApollo from './initApolloClient'


export type WithApolloType = {
  githubApolloState?: NormalizedCacheObject,
  githubApolloClient?: ApolloClient<NormalizedCacheObject>
}

export default (App: FC<any>) => {
  return ({githubApolloState, githubApolloClient, ...pageProps}: WithApolloType) => {
    const client: ApolloClient<NormalizedCacheObject> = githubApolloClient ?? initApollo(
      githubApolloState
    )

    return (
      <ApolloProvider client={ client }>
        <App githubApolloClient={ client } { ...pageProps }/>
      </ApolloProvider>
    )
  }
}

