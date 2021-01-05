import React, { FC } from 'react'

export const ErrorItem: FC<{ error: string }> = ({error}) => {
  return (
    <h2>
      { JSON.stringify(error) },please wait
    </h2>
  )
}
