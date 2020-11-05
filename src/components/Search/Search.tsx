import React, { ChangeEvent, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Container from '@material-ui/core/Container'
import RepositorySearchResult from './RepositorySearchResult'
import UserSearchResult from './UserSearchResult'

export default function SearchForm() {
  const classes = useStyles()
  const [searchType, setType] = useState('repositories')
  type searchType = 'repositories' | 'users'
  const [searchInput, setInput] = useState('')
  const setSearchType = (event: ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string)
  }

  const setUserInput = (event: ChangeEvent<{ value: string }>) => {
    setInput(event.target.value as string)
  }

  return (
    <div className={classes.container}>
      <Container className={classes.searchForm}>
        <h1 className={classes.title}>SEARCH</h1>
        <OutlinedInput
          className={classes.input}
          value={searchInput}
          onChange={setUserInput}
          placeholder={searchType}
        />
        <FormControl required variant="outlined" className={classes.formControl}>
          <Select value={searchType} onChange={setSearchType} className={classes.select}>
            <MenuItem value={'repositories'}>Repositories</MenuItem>
            <MenuItem value={'users'}>Users</MenuItem>
          </Select>
        </FormControl>
        {searchType === 'repositories' ? (
          <RepositorySearchResult input={searchInput} />
        ) : (
          <UserSearchResult input={searchInput} />
        )}
      </Container>
    </div>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundAttachment: 'fixed',
      background: 'linear-gradient(180deg, rgba(43,49,55,1) 0%, rgba(105,105,105,1) 100%)'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    searchForm: {
      padding: '1%',
      width: '70%',
      borderRadius: '15px',
      backgroundColor: '#fafbfc',
      textAlign: 'center',
      color: '#2b3137',
      paddingBottom: '7%'
    },
    input: {
      width: '90%',
      height: '10vh'
    },
    title: {
      marginBottom: '3%'
    },
    select: {
      height: '7vh'
    }
  })
)
