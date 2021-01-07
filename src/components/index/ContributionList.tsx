import React, { FC } from 'react'
import { ContributionItem } from './ContributionItem'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ContributionsCollection } from '../../generated/graphql'
import { ContributionItemType, ContributionKeys, ContributionType } from '../../types/contribution'
import { useMemo } from 'react'
import { ContributionToText } from '../../utils/splitText'
import { transformDate } from '../../utils/dateTransform'

type PropsType<T> = {
  data: ContributionsCollection
  keys: Array<ContributionKeys>
}

export const ContributionList: FC<PropsType<ContributionsCollection>> = ({keys, data}) => {
  const classes = useStyles()

  const ContrList = useMemo(() => {
    return keys.flatMap((c) => {
      return (data[c] as Array<ContributionType>)
        .flatMap((cont: ContributionType) => {
          return (cont?.contributions?.nodes as Array<ContributionItemType>)
            .map((nod: ContributionItemType) => {
              return {
                title: (nod?.__typename && ContributionToText[nod?.__typename]) || 'Action',
                key: nod.occurredAt,
                date: transformDate(nod.occurredAt),
                name: cont.repository.nameWithOwner
              }
            })
        })
    })
  }, [data, keys])

  return (
    <Box className={ classes.contributionsSection }>
      { ContrList.map(value => (
        <ContributionItem
          { ...value }
          key={ value.key }
        />
      )) }
    </Box>
  )
}

const useStyles = makeStyles(() => ({
  contributionsSection: {
    width: '100%',
  },
}))
