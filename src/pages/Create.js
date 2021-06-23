import React from 'react'
import { Button, ButtonGroup, Box, Container, Paper } from '@material-ui/core'
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


      <AppBar component="div" alignItems="center" justifyContent="center" width={10} elevation={10}>
        <Typography variant="button" align="center">
          Create page
        </Typography>
      </AppBar>
      <Container>
        <Typography variant="h1" display="block" color="" align="center" >
          Create a new note.
        </Typography>
        <Button variant="contained" color="secondary" type="submit" onClick={() => console.log("you clicked me")}>Submit</Button>


        <ButtonGroup color="secondary" >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Container>
    </div>
  )
}


