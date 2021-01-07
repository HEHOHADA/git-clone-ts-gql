import React, { FC } from 'react'
import { Header } from './Header'

export const ErrorItem: FC<{ error: string }> = ({error}) => {
  return (
    <Header
      size={ 'large' }
      title={ `${ JSON.stringify(error) },please wait` }/>

  )
}
