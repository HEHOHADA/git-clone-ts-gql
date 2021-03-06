import React from 'react'
import { ErrorItem } from '../ui/Error'
import Loader from '../ui/Loader'
import { ApolloError } from '@apollo/client'
import { CenteredContainer } from '../ui/CenteredContainer'

type PropsType<T> = {
  data: T
  DataComponent: JSX.Element | NonNullable<React.ReactNode>
  loading: boolean
  error?: ApolloError
}
type GenericType = ({} | null | undefined)

export const DataShower = <T extends GenericType>({
                                                    data,
                                                    DataComponent,
                                                    loading,
                                                    error
                                                  }: PropsType<T>) => {
  return (
    <>
      { data ? DataComponent : loading ?
        <CenteredContainer>
          <Loader/>
        </CenteredContainer> : error ?
          <ErrorItem
            error={ error.toString() }/> : null }
    </>
  )
}
