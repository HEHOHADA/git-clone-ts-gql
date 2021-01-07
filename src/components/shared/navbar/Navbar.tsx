import React, { FC, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MoreIcon from '@material-ui/icons/MoreVert'
import github from '../../../static/github.png'
import { Search } from '../Search'
import { AppBar } from '@material-ui/core'

type PropsType = {
  isAuth?: boolean
  onLogout: () => void
  goHome: () => void
}

export const Navbar: FC<PropsType> = ({goHome, onLogout}) => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ {vertical: 'top', horizontal: 'right'} }
      id={ menuId }
      keepMounted
      transformOrigin={ {vertical: 'top', horizontal: 'right'} }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
    >
      <MenuItem onClick={ onLogout }>Logout</MenuItem>
    </Menu>
  )

  const renderMobileMenu = (
    <Menu
      anchorEl={ mobileMoreAnchorEl }
      anchorOrigin={ {vertical: 'top', horizontal: 'right'} }
      id={ 'primary-search-account-menu-mobile' }
      keepMounted
      transformOrigin={ {vertical: 'top', horizontal: 'right'} }
      open={ isMobileMenuOpen }
      onClose={ handleMobileMenuClose }
    >
      <MenuItem onClick={ handleProfileMenuOpen }>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle/>
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={ classes.grow }>
      <AppBar className={ classes.appBar } position="static">
        <Toolbar>
          <Typography onClick={ goHome } className={ classes.title } variant="h6" noWrap>
            <img src={ github } className={ classes.icon } alt="Github Clone"/>
          </Typography>
          <Search/>
          <div className={ classes.grow }/>
          <div className={ classes.sectionDesktop }>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={ menuId }
              aria-haspopup="true"
              onClick={ handleProfileMenuOpen }
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
          </div>
          <div className={ classes.sectionMobile }>
            <IconButton
              aria-label="show more"
              aria-controls={ 'primary-search-account-menu-mobile' }
              aria-haspopup="true"
              onClick={ handleMobileMenuOpen }
              color="inherit"
            >
              <MoreIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      { renderMobileMenu }
      { renderMenu }
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    appBar: {
      backgroundColor: '#2b3137',
    },
    icon: {
      width: '150px',
      display: 'flex'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      },
      cursor: 'pointer'
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
)
