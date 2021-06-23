import React from 'react'
import { Box, Container, Paper } from '@material-ui/core'
// import { MenuIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "@fontsource/roboto"; // Defaults to weight 400.

export default function Create() {
  return (
    <div>

      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
      </AppBar>


      <AppBar component="div" alignItems="center" justifyContent="center" width={10} elevation={10}>
        <Typography variant="body" align="center">
          Create page
        </Typography>
      </AppBar>
      <Typography variant="h5" color="" align="center">
        Create a new note.lorem
      </Typography>


    </div>
  )
}
