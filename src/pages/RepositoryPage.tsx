import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { useParams } from 'react-router-dom'
import { useGetRepoQuery } from '../generated/graphql'
import { MainContainer } from '../components/ui/MainContainer'

type ParamsType = {
  repo: string
  username: string
}

export default function RepositoryPage() {
  const params = useParams<ParamsType>()
  const {data} = useGetRepoQuery({
    variables: {
      name: params.repo,
      owner: params.username
    }
  })
  console.log(data)
  return (
    <MainLayout>
      <MainContainer>
        <div>str</div>
      </MainContainer>
    </MainLayout>
  )
}
