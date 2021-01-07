import React from 'react'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type PropsType = {
  children: NonNullable<React.ReactNode>
}

export const CenteredContainer = ({children}: PropsType) => {
  const classes = useStyles()
  return (
    <Container className={ classes.center }>
      { children }
    </Container>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    center: {
      padding: '1%',
      width: '80vw',
      borderRadius: '15px',
      backgroundColor: '#fafbfc',
      height: '80vh',
      overflow: 'auto',
      textAlign: 'center',
      color: '#2b3137',
      paddingBottom: '7%'
    },
  })
)
