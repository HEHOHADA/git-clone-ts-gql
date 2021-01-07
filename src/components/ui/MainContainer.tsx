import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type PropsType = {
  children: NonNullable<React.ReactNode>
}

export const MainContainer: FC<PropsType> = ({children}) => {
  const classes = useStyles()
  return (
    <Container
      disableGutters
      className={ classes.mainPageContainer }>
      { children }
    </Container>
  )
}
const useStyles = makeStyles(() => ({
  mainPageContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px'
  }
}))
