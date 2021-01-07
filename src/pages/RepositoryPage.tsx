import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { useParams } from 'react-router-dom'
import { TreeEntry, useGetRepoQuery } from '../generated/graphql'
import { MainContainer } from '../components/ui/MainContainer'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Button } from '@material-ui/core'
import { DataShower } from '../components/shared/DataShower'
import { CenteredContainer } from '../components/ui/CenteredContainer'
import { Header } from '../components/ui/Header'
import { HeaderInfo } from '../components/Repository/HeaderInfo'
import { TableRepo } from '../components/Repository/TableRepo'
import { useRedirect } from '../hooks/useRedirect'

type ParamsType = {
  repo: string
  username: string
}

export default function RepositoryPage() {
  const classes = useStyles()
  const params = useParams<ParamsType>()
  const {data, loading, error} = useGetRepoQuery({
    variables: {
      name: params.repo,
      owner: params.username
    }
  })
  const {goHome} = useRedirect()
  const content = !data?.repository?.object ||
  data?.repository?.object?.__typename !== 'Tree' ||
  !data.repository.object.entries?.length ?
    (
      <>
        <Header title={ 'No MASTER or something wrong' } size={ 'large' }/>
        <Button
          variant="contained" color="primary"
          className={ classes.btn }
          onClick={ goHome }>Back</Button>
      </>
    ) : (
      <TableRepo data={ data?.repository.object.entries as Array<TreeEntry>
      }
      />
    )
  return (
    <MainLayout>
      <MainContainer>
        <CenteredContainer>
          <Box className={ classes.description }>
            <DataShower
              data={ data?.repository }
              DataComponent={ (
                <HeaderInfo
                  description={ data?.repository?.description as string }
                  name={ data?.repository?.name as string }
                  login={ data?.repository?.owner.login as string }/>
              ) } loading={ loading } error={ error }/>
          </Box>
          <DataShower
            data={ data?.repository }
            DataComponent={ content } loading={ loading } error={ error }/>
        </CenteredContainer>
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
  description: {
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'start'
  },
  btn: {
    marginTop: '0.5rem',
  }
}))

