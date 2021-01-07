import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Header } from '../ui/Header'
import { makeStyles } from '@material-ui/core/styles'

type PropsType = {
  name: string
  login: string
  description?: string
}

export const HeaderInfo: FC<PropsType> = ({name, login, description}) => {
  const classes = useStyles()
  return (
    <>
      <Box className={ classes.header }>
        <Header
          styles={ {margin: '1rem'} }
          title={ `Repo name is: ${ name }` } size={ 'large' }/>
        <Header
          styles={ {margin: '1rem'} }
          title={ `Repo of - ${ login }` }
          size={ 'small' }/>
      </Box>
      { description &&
      <Box className={ classes.infoBox }>
        <Typography
          align="center"
          paragraph variant="subtitle1">{ description } </Typography>
      </Box>
      }
    </>
  )
}
const useStyles = makeStyles(() => ({
  infoBox: {
    maxWidth: '50%',
    borderLeft: '1px solid black'
  },
  header: {
    width: '100%'
  }
}))
