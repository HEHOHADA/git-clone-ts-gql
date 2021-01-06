import React, { ChangeEvent, useCallback, useState } from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { IconButton } from '@material-ui/core'
import { Search } from '../components/shared/Search'
import { makeStyles } from '@material-ui/core/styles'
import { LibraryAdd } from '@material-ui/icons'
import { RepositoryEdge, useGetViewerReposQuery } from '../generated/graphql'
import { Repositories } from '../components/Repository/Repositories'
import { SideBarContainer } from '../components/ui/SideBarContainer'
import { MainContainer } from '../components/ui/MainContainer'
import { DataShower } from '../components/shared/DataShower'

export default function Index() {
  const classes = useStyles()
  const {data, loading, error} = useGetViewerReposQuery()
  const repositories = data?.viewer.repositories.edges
  const contributions = data?.viewer.contributionsCollection.commitContributionsByRepository
  const [search, setSearch] = useState<string>('')
  const searchInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, [])
  console.log('data', data)
  console.log('contributions', contributions)
  return (
    <MainLayout>
      <MainContainer>
        <>
            <SideBarContainer>
            <div className={ classes.centeredContainer }>
                <span>Repositories</span>
                <IconButton color="inherit">
                <LibraryAdd/>
                </IconButton>
            </div>
            <Search placeholder={ 'Поиск репозитория' } onChange={ searchInputChange }/>
            <DataShower error={ error }
                        loading={ loading }
                        data={ repositories }
                        DataComponent={ <Repositories
                            search={ search }
                            repositories={ repositories as Array<RepositoryEdge> }/> }/>
            </SideBarContainer>
            <div className={ classes.contributionsSection }>
                <h1 className={ classes.contribCount }>contributions - number</h1>
                <div className={ classes.contributions }>
                    <div className={classes.contribution}>
                        <h3 className={classes.contributionName}>Repo name</h3>
                        <span className={classes.contributionName}>contrib name</span>
                        <span>contrib date</span>
                    </div>
                </div>
            </div>
        </>
      </MainContainer>
    </MainLayout>
  )
}

const useStyles = makeStyles(() => ({
  centeredContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  contributionsSection: {
      width: '100%',
  },
  contribCount: {
      textAlign: 'center',
  },
  contributions: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridGap: '10px',
      padding: '30px',
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
