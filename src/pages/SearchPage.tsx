import React from 'react'
import { useHistory } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { SearchForm } from '../components/Search/Search'

export default function SearchPage() {
  const history = useHistory()
  const search = history.location.search.split('=')[1]
  return (
    <MainLayout>
      <SearchForm search={ search }/>
    </MainLayout>
  )
}
