import "./ItemCard.scss";

import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router";

export default function ItemCard() {
  const [isOpened, setIsOpened] = useState(false);
  const navigate = useNavigate();


  const handleClickOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  return (
    <>
      <div className="item-wrapper" onClick={handleClickOpen}>
        <h1>Some info</h1>
      </div>
      <Dialog
        open={isOpened}
        onClose={handleClose}
        maxWidth="md"
      >
        <DialogTitle>
          Title
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => navigate("/marketplace/1")}>
            Open full page
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
