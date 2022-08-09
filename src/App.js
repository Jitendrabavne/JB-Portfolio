import React from 'react'
import Navbar from './components/Navbar';
import About from './components/About';

import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Erore from './components/Erore';
import Home from './components/Home';

function App(){
  // eslint-disable-next-line
  return (
    
    <>
      <Router>
        <Navbar />
        {/* <hr/> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route>
            <Erore />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App