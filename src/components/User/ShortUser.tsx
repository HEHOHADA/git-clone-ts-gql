import React from 'react'
import { Box, Card, CardContent, CardMedia, makeStyles } from '@material-ui/core'
import { UserInfoFragment } from '../../generated/graphql'
import Typography from '@material-ui/core/Typography'

type UserProps = UserInfoFragment & {
  onClick: (url: string) => void
}

export const ShortUser: React.FC<UserProps> = ({avatarUrl, onClick, login, bio}) => {
  const classes = useStyles()
  return (
    <Card className={ classes.container }>
      <Box className={ classes.cover }>
        <CardMedia
          className={ classes.avatar }
          image={ avatarUrl }
          title="Live from space album cover"
        />
        <CardContent className={ classes.content } onClick={ () => onClick(`/${ login }`) }>
          < Typography component='h5' variant='h5'>
            { login }
          </Typography>
          <Typography component='h6' variant='h6'>
            { bio }
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    width: '100%',
    margin: '2px',
    flex: 'auto',
    border: '1px solid #dadada',
    height: '5rem',
    cursor: 'pointer',
  },
  link: {
    verticalAlign: 'super'
  },
  avatar: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    marginLeft: '1rem',
    padding: '2%'
  },
  content: {
    flex: '1 0 auto',
    width: 'min-content',
  },
  cover: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}))
