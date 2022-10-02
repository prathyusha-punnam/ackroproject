import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import * as Action from './store/actions/helper';

// @material-ui/core components
import { 

  Grid,
  Dialog,
  CircularProgress,
  DialogContent,
  Snackbar,
  Alert

} from "@mui/material";



// import widgets
import ContactList from './widgets/ContactList';
import ContactDetail from './widgets/ContactDetail';
import Header from "./widgets/Header";

function App() {

  const showDialog = useSelector(({ helper }) => helper.message.dialog.show);
  const checkMessage = useSelector(({ helper }) => helper.message.show);
  const checkMessageText = useSelector(({ helper }) => helper.message.message);
  const checkMessageSeverity = useSelector(
    ({ helper }) => helper.message.severity
  );
  const dispatch = useDispatch();

  function hideMessage() {
    dispatch({
      type: Action.HIDE_MESSAGE,
    });
  }

  return (
    <>
    <Snackbar
              open={checkMessage}
              autoHideDuration={3000}
              onClose={() => {
                hideMessage();
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
            >
              <Alert
                sx={{ width: "100%" }}
                variant="filled"
                severity={checkMessageSeverity}
              >
                {checkMessageText}
              </Alert>
            </Snackbar>
    <Dialog open={showDialog} >

      <DialogContent>

        <CircularProgress />

      </DialogContent>



      </Dialog>
    <Header />
      <Grid container component="main" sx={{ height: '100vh' }}>

          <ContactList />
          <ContactDetail />

        </Grid>

    </>
  );
}

export default App;