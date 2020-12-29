import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Button, Card, CardActions, CardContent } from '@material-ui/core'

type PropsType = {
  name: string
  language: string
  description: string
  starCount?: number
  updatedAt?: number
  actions?: JSX.Element
}

export const RepositoryCard: FC<PropsType> = ({name, language, description}) => {
  const classes = useStyles()

  return (
    <Card className={ classes.root }>
      <div className={ classes.cover }>
        <CardContent className={ classes.content }>
          <Typography component="h5" variant="h5">
            { name }
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            { description }
          </Typography>
          <Typography component="h5" variant="h5">
            { language }
          </Typography>
        </CardContent>
        <Typography component="h5" variant="h5">
          { language }
        </Typography>
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
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
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
  }),
)
