import React, { ChangeEvent, useCallback, useState } from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { Container, IconButton } from '@material-ui/core'
import { Search } from '../components/shared/Search'
import { makeStyles } from '@material-ui/core/styles'
import { LibraryAdd } from '@material-ui/icons'
import { RepositoryEdge, useGetViewerReposQuery } from '../generated/graphql'
import { Repositories } from '../components/Repository/Repositories'
import { SideBarContainer } from '../components/ui/SideBarContainer'
import { MainContainer } from '../components/ui/MainContainer'

export default function Index() {
  const classes = useStyles()
  const {data} = useGetViewerReposQuery()
  const repositories = data?.viewer.repositories.edges
  const [search, setSearch] = useState<string>('')
  const searchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])
  return (
    <MainLayout>
      <MainContainer>
        <SideBarContainer>
          <div className={ classes.centeredContainer }>
            <span>Repositories</span>
            <IconButton color="inherit">
              <LibraryAdd/>
            </IconButton>
          </div>
          <Search placeholder={ 'Поиск репозитория' } onChange={ searchInputChange }/>
          { repositories && <Repositories
            search={ search }
            repositories={ repositories as Array<RepositoryEdge> }/> }
        </SideBarContainer>
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
