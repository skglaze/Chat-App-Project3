import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage.jsx';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:userId" component={UserPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
