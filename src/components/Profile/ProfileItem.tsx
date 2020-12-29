import React from 'react'
import { Box, Button, Container, Grid } from '@material-ui/core'
import { Image } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

export const ProfileItem = () => {
  const classes = useStyles()
  return (
    <Container className={ classes.container }>
      <Box>
        <Image/>
      </Box>
      <Grid>
        <Grid>dsadsa</Grid>
      </Grid>
      <Grid>
        <Button>click</Button>
      </Grid>
      <Grid>
        <Grid>dsadsa</Grid>
      </Grid>
    </Container>
  )
}
const useStyles = makeStyles(() => ({
  container: {
    flex: 1
  }
}))
