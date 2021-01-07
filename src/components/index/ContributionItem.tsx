import React, { FC } from 'react'
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

type PropsType = {
  title: string
  date: Date | string
  name: string
}
export const ContributionItem: FC<PropsType> = ({title, name, date}) => {
  const classes = useStyles()
  return (
    <Card className={ classes.contributions }>
      <CardContent className={ classes.contribution }>
        <CardHeader title={ title } className={ classes.contributionName }/>
        <Typography className={ classes.contributionName }>{ name }</Typography>
        <Typography>{ date }</Typography>
      </CardContent>
    </Card>
  )
}
const useStyles = makeStyles(() => ({
  contribCount: {
    textAlign: 'center',
    fontSize: '20px'
  },
  contributions: {
    padding: '1rem',
  },
  contribution: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 10px',
    boxShadow: '0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: '10px',
  },
  contributionName: {
    marginRight: '10px',
  }
}))
