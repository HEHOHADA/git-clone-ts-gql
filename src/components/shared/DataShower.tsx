import React, { FC } from 'react'
import { ErrorItem } from '../ui/Error'
import Loader from '../ui/Loader'

type PropsType = {
  data: any
  DataComponent: JSX.Element
  loading: boolean
  error: any
}

export const DataShower: FC<PropsType> = ({data, DataComponent, loading, error}) => {
  return (
    <>
      { data ? DataComponent : loading ? <Loader/> : error ? <ErrorItem error={ error }/> : null }
    </>
  )
}
