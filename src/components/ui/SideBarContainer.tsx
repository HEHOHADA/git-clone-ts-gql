import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'

type PropsType = {
  width?: number
}

export const SideBarContainer: FC<PropsType> = ({children, width = 20}) => {
  const classes = useStyles({width})
  return (
    <div className={ classes.sideBarContainer }>
      { children }
    </div>
  )
}
const useStyles = makeStyles(() => ({
  sideBarContainer: (props: PropsType) => ({
    borderRight: '1px solid #e1e4e8',
    minWidth: `${ props.width }vw`,
    height: '100vh'
  })
}))
