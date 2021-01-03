import React, { ChangeEvent, FC, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
type PropsType = {
  placeholder?: string,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Search: FC<PropsType> = ({placeholder = 'Search...', onChange}) => {
  const classes = useClasses()
  const history = useHistory()
  const [searchInput, setSearchInput] = useState('')
  const onSearch = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter') {
      history.push(`/search?search=${ searchInput }`)
    }
  }
  const possibleProps = onChange ? {
    onChange: onChange
  } : {
    value: searchInput,
    onKeyDown: onSearch,
    onChange: (event: ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value)
  }
  return (
    <div className={ classes.search }>
      <div className={ classes.searchIcon }>
        <SearchIcon/>
      </div>
      <InputBase
        { ...possibleProps }
        placeholder={ placeholder }
        classes={ {
          root: classes.inputRoot,
          input: classes.inputInput
        } }
        inputProps={ {'aria-label': 'search'} }
      />
    </div>)
}

const useClasses = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${ theme.spacing(4) }px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch'
      }
    }
  })
)
