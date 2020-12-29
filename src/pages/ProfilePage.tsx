import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { ProfileItem } from '../components/Profile/ProfileItem'
import { MainContainer } from '../components/ui/MainContainer'
import { SideBarContainer } from '../components/ui/SideBarContainer'
import { RepositoriesCard } from '../components/Repository/RepositoriesCard'

export function ProfilePage() {
  return (
    <MainLayout>
      <MainContainer>
        <>
          <SideBarContainer width={ 25 }>
            <ProfileItem/>
          </SideBarContainer>
          <RepositoriesCard data={ [
            {name: '1', description: '1', language: '1', id: '1'},
            {name: '1', description: '1', language: '1', id: '4'},
            {name: '1', description: '1', language: '1', id: '2'},
            {name: '1', description: '1', language: '1', id: '3'},
            ] }/>
        </>
      </MainContainer>
    </MainLayout>
  )
}
