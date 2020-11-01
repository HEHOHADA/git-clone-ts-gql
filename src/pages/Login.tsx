import React from 'react'
import { Link } from '@material-ui/core'

import { MainLayout } from '../components/layout/MainLayout'
import { githubClientKeys } from '../utils/config'

export const Login = () => {
  const { clientId } = githubClientKeys
  return (
    <MainLayout>
      <Link
        href={ `https://github.com/login/oauth/authorize?client_id=${ clientId }` }
      >
        Authorize with github
      </Link>
    </MainLayout>
  )
}
