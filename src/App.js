import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Login from './components/login'
import Dashboard from './components/dashboard'
import axios from 'axios'
import Landing from './components/landing'
import Update from './components/update'
import New from './components/empty'
function App() {
 
 
    
  

  return (
    
    <Router>
    <div className="App" >
    <Switch>
    <Route exact path="/">
    <Landing/>
     
     
      </Route>
   
      <Route path="/dashboard">
      <Dashboard/>
      </Route>
      <Route path="/update">
      <Update/>
      </Route>
      <Route path="/new">
      <New/>
      </Route>

      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
