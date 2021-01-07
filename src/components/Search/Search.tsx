import React, { ChangeEvent, FC, useState } from 'react'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Button, MenuItem, Select } from '@material-ui/core'
import {
  RepoInfoFragment,
  SearchType,
  UserInfoFragment,
  useSearchByQueryQuery
} from '../../generated/graphql'
import { DataShower } from '../shared/DataShower'
import { Users } from '../User/Users'
import { RepositorySearchResult } from './RepositorySearchResult'
import { CenteredContainer } from '../ui/CenteredContainer'
import { Header } from '../ui/Header'

type PropsType = {
  search: string
}

export const SearchForm: FC<PropsType> = ({search}) => {
  const classes = useStyles()
  const [searchType, setType] = useState<SearchType>(SearchType.Repository)
  const [searchInput, setInput] = useState<string>(search)
  const setSearchType = (event: ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as SearchType)
  }
  const setUserInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }
  const {data, error, loading, variables, fetchMore} = useSearchByQueryQuery({
    variables: {
      type: searchType,
      query: searchInput,
      count: 5
    }
  })
  const onFetchMore = async () => {
    await fetchMore({
      variables: {
        type: searchType,
        query: searchInput,
        count: variables?.count
      }
    })
  }

  return (
    <Box className={ classes.container }>
      <CenteredContainer>
        <Header size={ 'large' } title={ 'SEARCH' }/>
        <Box>
          <OutlinedInput
            className={ classes.input }
            value={ searchInput }
            onChange={ setUserInput }
          />
          <Button>Search</Button>
        </Box>
        <Select value={ searchType } onChange={ setSearchType } className={ classes.select }>
          <MenuItem value={ SearchType.Repository }>Repositories</MenuItem>
          <MenuItem value={ SearchType.User }>Users</MenuItem>
        </Select>
        { <DataShower data={ data?.search.nodes } DataComponent={
          searchType === SearchType.Repository ?
            <RepositorySearchResult data={ data?.search.nodes as Array<RepoInfoFragment> }/> :
            <Users users={ data?.search.nodes as Array<UserInfoFragment> }/>
        } loading={ loading } error={ error }/> }
        <Button onClick={ onFetchMore }>Load more...</Button>
      </CenteredContainer>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundAttachment: 'fixed',
      background: 'linear-gradient(180deg, rgba(43,49,55,1) 0%, rgba(105,105,105,1) 100%)',
      height: '100%',
      paddingTop: '20px'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    center: {
      padding: '1%',
      width: '80vw',
      borderRadius: '15px',
      backgroundColor: '#fafbfc',
      height: '80vh',
      overflow: 'auto',
      textAlign: 'center',
      color: '#2b3137',
      paddingBottom: '7%'
    },
    input: {
      width: '50%',
      height: '50px'
    },
    title: {
      marginBottom: '3%'
    },
    select: {
      height: '7vh'
    }
  })
)
