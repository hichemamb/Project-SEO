import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../home/Home';
import Animal from '../animal/Animal';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/animal' component={Animal}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
