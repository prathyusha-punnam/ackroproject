/* eslint-disable no-unused-vars */
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';

// @material-ui/core components
import { 
  Box, 
  Button, 
  Typography,
  AppBar,
  Toolbar,
  IconButton 
} from "@mui/material";


// Icons
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Actions
import * as Actions from '../store/actions/contact';
import * as snackAction from '../store/actions/helper';


function Header() {

  const dispatch = useDispatch();
  const contacts = useSelector(({contact}) => contact.contacts);

  function getContacts() {
    dispatch(snackAction.showDialog());
    dispatch(Actions.getContacts())
  }



  return (
    <>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {contacts ? contacts.length : 'Empty'}
          </Typography>
          <Button color="success" sx={{ borderRadius: 2 }} variant="contained" onClick={getContacts} endIcon={<CloudDownloadIcon />}>
            Get Contacts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
    </>
  );
}

export default Header;