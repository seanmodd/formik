import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Notes from './pages/Notes'
import Create from './pages/Create'
import './App.css';
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefe"
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
