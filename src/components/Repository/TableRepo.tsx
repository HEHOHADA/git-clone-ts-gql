import React, { FC } from 'react'
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core'
import { TreeEntry } from '../../generated/graphql'


type PropsType = {
  data: Array<TreeEntry>
}

export const TableRepo: FC<PropsType> = ({data}) => {
  return (
    <TableContainer component={ Paper }>
      <Table size="small" aria-label="a dense table">
        <TableBody>
          { data?.length > 0 &&
          data.map((row) => (
            <TableRow key={ row.name }>
              <TableCell component="th" scope="row">
                { row.name }
              </TableCell>
              <TableCell align="right">{ row.extension }</TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
  )
}
