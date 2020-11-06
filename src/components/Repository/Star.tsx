import { SvgIconProps } from '@material-ui/core/SvgIcon'
import SvgIcon from '@material-ui/icons/Star'
import React from 'react'

const StarIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      { ...props }
      stroke="#2b3137"
      stroke-linejoin="round"
      stroke-width="7%"
    >
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22
         9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </SvgIcon>
  )
}

export default React.memo(StarIcon)
