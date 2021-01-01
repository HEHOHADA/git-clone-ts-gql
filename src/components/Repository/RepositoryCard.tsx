import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box, Card, CardContent } from '@material-ui/core'
import { Repository } from '../../generated/graphql'
import Star from './Star'
import { useHistory } from 'react-router-dom'


export const RepositoryCard: FC<Repository> = ({name, stargazers, languages, description}) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <Card className={ classes.root } >
      <div className={ classes.cover }>
        <CardContent className={ classes.content }>
          <Typography component="h5" variant="h5">
            { name }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            { description }
          </Typography>
          <Typography className={ classes.language } component="h5" color='primary' variant="h5">
            { languages?.edges && languages?.edges[0]?.node.name }
          </Typography>
        </CardContent>
        <Box className={ classes.star }>
          <Star/>
          <Typography component="h5" variant="h5">
            { stargazers.totalCount }
          </Typography>
        </Box>
      </div>
    </Card>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      margin: '2px',
      flex: '0 0 49%',
      height: '10rem',
      cursor: 'pointer',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      display: 'flex',
      justifyContent: 'spaceBetween',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    language: {
      paddingTop: '1rem',
      alignItems: 'center',
    },
    star: {
      display: 'flex',
      alignItems: 'center'
    }
  })
)
