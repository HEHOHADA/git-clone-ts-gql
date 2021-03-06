import React, { ChangeEvent, useCallback, useState } from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { Box, IconButton, Typography } from '@material-ui/core'
import { Search } from '../components/shared/Search'
import { makeStyles } from '@material-ui/core/styles'
import { LibraryAdd } from '@material-ui/icons'
import {
  ContributionsCollection,
  RepositoryEdge,
  useGetViewerReposQuery
} from '../generated/graphql'
import { Repositories } from '../components/Repository/Repositories'
import { SideBarContainer } from '../components/ui/SideBarContainer'
import { MainContainer } from '../components/ui/MainContainer'
import { DataShower } from '../components/shared/DataShower'
import { ContributionList } from '../components/index/ContributionList'
import { ContributionKeys } from '../types'

export default function Index() {
  const classes = useStyles()
  const {data, loading, error} = useGetViewerReposQuery()
  const repositories = data?.viewer.repositories.edges
  const contributions = Object.keys(data?.viewer.contributionsCollection || {})
                              .filter(key => key !== '__typename') as Array<ContributionKeys>
  const [search, setSearch] = useState<string>('')
  const searchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])
  return (
    <MainLayout>
      <MainContainer>
        <SideBarContainer>
          <Box className={ classes.centeredContainer }>
            <Typography variant="subtitle2">Repositories</Typography>
            <IconButton color="inherit">
              <LibraryAdd/>
            </IconButton>
          </Box>
          <Search placeholder={ 'Поиск репозитория' } onChange={ searchInputChange }/>
          <DataShower error={ error }
                      loading={ loading }
                      data={ repositories }
                      DataComponent={ <Repositories
                        search={ search }
                        repositories={ repositories as Array<RepositoryEdge> }/> }/>
        </SideBarContainer>
        <DataShower
          error={ error }
          loading={ loading }
          data={ data?.viewer.contributionsCollection }
          DataComponent={ <ContributionList
            data={ data?.viewer.contributionsCollection as ContributionsCollection }
            keys={ contributions }/> }/>

      </MainContainer>
    </MainLayout>
  )
}

const useStyles = makeStyles(() => ({
  centeredContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
}))
