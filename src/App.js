import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React, { Component } from 'react';
import Notes from './components/pages/Notes'
import Create from './components/pages/Create'
import SeanFirstForm from './components/old/SeanFirstForm';
import './App.css';
import FormikContainer from './components/old/FormikContainer';
import FormDemo from './components/FormDemo';
import LetsCodeDemo from './components/LetsCodeDemo';


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
