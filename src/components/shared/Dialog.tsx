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
  header: string,
  content: string,
  actions?: any
}

export const DialogItem: FC<PropsType> = ({header, content, actions}) => {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    !actions && setOpen(false)
  }

  return (
    <Dialog
      open={ open }
      onClose={ handleClose }
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={ {cursor: 'move'} } id="draggable-dialog-title">
        { header }
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          { content }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        { actions ??
        <Button autoFocus onClick={ handleClose } color="primary">
          Cancel
        </Button>
        }
      </DialogActions>
    </Dialog>
  )
}
