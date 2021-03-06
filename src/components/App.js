import React, { Component } from 'react';
import '../styles/App.css';
import CardList from './CardList';
import CreateCard from './CreateCard';
import Header from './Header'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
render() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={CardList} />
          <Route exact path="/create" component={CreateCard} />
        </Switch>
      </div>
    </div>
  )
}
}

export default App;
