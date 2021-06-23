import React from 'react'
import { Button, ButtonGroup, Box, Container, Paper } from '@material-ui/core'
// import { MenuIcon } from '@material-ui/icons'
// import { AcUnitOutlinedIcon } from '@material-ui/icons'
// import { makeStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AcUnitOutlinedIcon from '@material-ui/icons/AcUnitOutlined';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// import "@fontsource/roboto"; // Defaults to weight 400.


const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: "underline",
    color: 'red'
  },
  spacing: {
    marginTop: 50,
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center"
  }
}
)

export default function Create() {
  const classes = useStyles()
  return (
    <div>


      <AppBar component="div" alignItems="center" justifyContent="center" width={10} elevation={10}>
        <Typography className={classes.title} variant="button" align="center">
          Create page
        </Typography>
      </AppBar>
      <Container className={classes.spacing}>
        <Typography variant="h1" display="block" color="" align="center" >
          Create a new note.
        </Typography>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          type="submit"
          onClick={() => console.log("you clicked me")}
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>


        <ButtonGroup color="secondary" >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        {/* icons */}
        <br />
        <AcUnitOutlinedIcon />
        <AcUnitOutlinedIcon color="secondary" fontSize="large" />
        <AcUnitOutlinedIcon color="action" fontSize="small" />
        <AcUnitOutlinedIcon color="error" fontSize="small" />
        <AcUnitOutlinedIcon color="disabled" fontSize="small" />
      </Container>
    </div>
  )
}


