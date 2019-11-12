import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage.jsx';
import UserPage from './components/UserPage';
import Room from './components/Room';
import AllUsers from './components/AllUsers';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/users/" component={AllUsers} />
          <Route exact path="/users/:userId" component={UserPage} />
          <Route exact path="/rooms/:roomId" component={Room} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
