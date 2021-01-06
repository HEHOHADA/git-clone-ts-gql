import React from 'react'
import { MainLayout } from '../components/layout/MainLayout'
import { useParams } from 'react-router-dom'
import { useGetRepoQuery } from '../generated/graphql'
import { MainContainer } from '../components/ui/MainContainer'
import { makeStyles } from '@material-ui/core/styles'
import fileIcon from '../static/blank-file.png'

type ParamsType = {
  repo: string
  username: string
}

export default function RepositoryPage() {
  const classes = useStyles()
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
        <div>
      <div className={ classes.description }>
        <h1>Repo name</h1>
        <h3>Repo owner: </h3>
        <h3>Contributors: </h3>
      </div>

            <hr/>
            <table>
                <tr>
                    <td><img src={ fileIcon } className={ classes.icon } alt="File Icon"/></td>
                    <td>File name</td>
                </tr>
            </table>
            <hr/>

            <div className={ classes.contributionsSection }>
                <div className={ classes.contributions }>
                    <div className={classes.contribution}>
                        <h3 className={classes.contributionName}>contrib name</h3>
                        <span className={classes.contributionName}>who</span>
                        <span>contrib date</span>
                    </div>
                </div>
            </div>
        </div>
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
  marginBottom: '30px'
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
    padding: '30px 0',
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
},
icon: {
    width: '20px',
  },
}))

