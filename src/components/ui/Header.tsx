import { Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

type PropsType = {
  size: 'large' | 'small'
  title: string
  styles?: {}
  children?: never
}

export const Header: FC<PropsType> = ({size, title, styles}) => {
  const classes = useStyles({size})
  return (
    <Typography
      className={ classes.header }
      style={ {...styles} }
      variant={ size === 'large' ? 'h1' : 'h3' }>
      { title }
    </Typography>
  )
}


const useStyles = makeStyles<Theme, { size: 'large' | 'small' }>(() =>
  createStyles({
    header: {
      fontSize: props => props.size === 'large' ? '2rem' : '1rem'
    },
  })
)
