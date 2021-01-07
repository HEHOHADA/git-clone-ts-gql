import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Header } from '../ui/Header'
import { makeStyles } from '@material-ui/core/styles'
import Star from './Star'
import Fork from './Fork'

type PropsType = {
  name: string
  login: string
  description?: string
  forkCount?: number
  stars?: number
}

export const HeaderInfo: FC<PropsType> = ({name, forkCount, stars, login, description}) => {
  const classes = useStyles()
  return (
    <>
      <Box className={ classes.header }>
        <Header
          className={ classes.headerBox }
          title={ `Repo name is: ${ name }` } size={ 'large' }/>
        <Header
          className={ classes.headerBox }
          title={ `Repo of - ${ login }` }
          size={ 'small' }/>
      </Box>
      { description &&
      <Box className={ classes.infoBox }>
        <Typography
          align="center"
          paragraph variant="subtitle1">{ description } </Typography>
        <Box>
          <Typography
            align="center"
            paragraph variant="subtitle1">{ forkCount } time <Fork/> </Typography>
          <Typography
            align="center"
            paragraph variant="subtitle1">{ stars } time <Star/></Typography>
        </Box>
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
  },
  headerBox: {
    margin: '1rem'
  }
}))
