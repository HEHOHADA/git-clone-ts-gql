import React, { FC } from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type PropsType = {
  url: string
  bio?: string | null
  name: string
}

export const ProfileItem: FC<PropsType> = ({url, bio, name}) => {
  const classes = useStyles()
  return (
    <Container className={ classes.container }>
      <Box>
        <img src={ url } className={ classes.img } alt={ name }/>
      </Box>
      <Grid>
        <Grid>{ name }</Grid>
      </Grid>
      <Grid>
        <Grid>{ bio }</Grid>
      </Grid>
    </Container>
  )
}
const useStyles = makeStyles(() => ({
  container: {
    flex: 1
  },
  img: {
    width: '100%',
    borderRadius: '50%'
  }
}))
