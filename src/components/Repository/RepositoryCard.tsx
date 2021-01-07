import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box, Card, CardContent } from '@material-ui/core'
import { RepoInfoFragment } from '../../generated/graphql'
import Star from './Star'

type PropsType = Partial<RepoInfoFragment> & {
  size?: 'small' | 'large'
  onClick: (url: string) => void
}

export const RepositoryCard: FC<PropsType> = ({
                                                name,
                                                onClick,
                                                size,
                                                owner,
                                                stargazers,
                                                languages,
                                                description
                                              }) => {
  const classes = useStyles({size})
  return (
    <Card className={ classes.root }>
      <Box className={ classes.cover }>
        <CardContent className={ classes.content }
                     onClick={ () => onClick(`/${ owner?.login }/${ name }`) }>
          <Typography component="h5" variant="h5">
            { name }
          </Typography>
          <Typography variant="subtitle1" className={ classes.text } color="textSecondary">
            { description }
          </Typography>
          <Typography className={ classes.language } component="h5" color='primary' variant="h5">
            { languages?.edges && languages?.edges[0]?.node.name }
          </Typography>
        </CardContent>
        <Box className={ classes.star }>
          <Star/>
          <Typography component="h5" variant="h5">
            { stargazers?.totalCount }
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

const useStyles = makeStyles<Theme, {
  size?: 'small' | 'large'
}>((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      margin: '2px',
      flex: props => props.size === 'large' ? 'auto' : '0 0 49%',
      height: '10rem',
      cursor: 'pointer',
    },
    content: {
      flex: '1 0 auto',
      width: 'min-content',
    },
    cover: {
      width: props => props.size === 'large' ? '100%' : 'auto',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    language: {
      paddingTop: '1rem',
      alignItems: 'center',
    },
    text: {
      maxHeight: '3rem',
      overflow: 'hidden',
    },
    star: {
      display: 'flex',
      alignItems: 'center',
      paddingRight: '1rem'
    }
  })
)
