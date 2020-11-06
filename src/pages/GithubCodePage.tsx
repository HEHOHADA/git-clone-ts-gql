import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link, useHistory } from 'react-router-dom'
import { setTokeValue } from '../lib/localStorage'
import { DialogItem } from '../components/shared/Dialog'
import { MainLayout } from '../components/layout/MainLayout'
import { accessTokenUrl, githubClientKeys } from '../utils/config'

export const GithubCodePage = (props: RouteComponentProps) => {
  let content
  const code = props.location.search.split('=')[1]
  if (!code) {
    content = 'Что-то пошло не так'
  }
  const history = useHistory()
  useEffect(() => {
    fetch(accessTokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        client_id: githubClientKeys.clientId,
        client_secret: githubClientKeys.clientSecret,
        code
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          setTokeValue(res.access_token)
          history.push('/')
        } else {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          content = res.error_description
        }
      })
  }, [code])

  return (
    <MainLayout>
      { content ? (
        <DialogItem
          actions={ <Link to="/login">Повторить попытку</Link> }
          contentText={ content }
          header={ 'Что-то пошло не так' }
        />
      ) : (
        <h1>Вы успешно вошли в систему</h1>
      ) }
    </MainLayout>
  )
}
