import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Notes from './pages/Notes'
import Create from './pages/Create'
import './App.css';



function App() {
  return (
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
  );
}

export default App;
