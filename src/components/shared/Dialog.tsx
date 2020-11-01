import React, { FC, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'

type PropsType = {
  header: string
  contentText: string
  actions?: JSX.Element
}

export const DialogItem: FC<PropsType> = ({ header, contentText, actions }) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    !actions && setOpen(false)
  }

  return (
    <Dialog open={ open } onClose={ handleClose } aria-labelledby="draggable-dialog-title">
      <DialogTitle style={ { cursor: 'move' } } id="draggable-dialog-title">
        { header }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{ contentText }</DialogContentText>
      </DialogContent>
      <DialogActions>
        { actions ?? (
          <Button autoFocus onClick={ handleClose } color="primary">
            Cancel
          </Button>
        ) }
      </DialogActions>
    </Dialog>
  )
}
