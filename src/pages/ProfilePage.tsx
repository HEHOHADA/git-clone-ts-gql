import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { ProfileItem } from '../components/Profile/ProfileItem'
import { MainContainer } from '../components/ui/MainContainer'
import { SideBarContainer } from '../components/ui/SideBarContainer'
import { RepositoriesCard } from '../components/Repository/RepositoriesCard'
import { useParams } from 'react-router-dom'
import { RepositoryEdge, useGetUserDetailQuery } from '../generated/graphql'
import { DataShower } from '../components/shared/DataShower'

type ProfilePageParams = {
  username: string
}

export function ProfilePage() {
  const params = useParams<ProfilePageParams>()
  const {data, loading, error} = useGetUserDetailQuery({variables: {login: params.username}})
  return (
    <MainLayout>
      <MainContainer>
        <SideBarContainer width={ 25 }>
          <ProfileItem
            bio={ data?.user?.bio }
            url={ data?.user?.avatarUrl }
            name={ data?.user?.login as string }/>
        </SideBarContainer>
        <DataShower data={ data?.user?.repositories.edges } DataComponent={
          <RepositoriesCard data={ data?.user?.repositories.edges as Array<RepositoryEdge> }/>
        } loading={ loading } error={ error }/>
      </MainContainer>
    </MainLayout>
  )
}
