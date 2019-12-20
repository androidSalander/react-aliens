import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'
import './Main.css'
import styles from './App.modules.css'
import Home from './Home'
import AllConspiraciesContainer from './containers/AllConspiraciesContainer'
import Search from './components/Search'

class App extends Component {
  state = {
    query: '',
    conspiracy: []
  }

  componentDidMount() {
    this.getOneConspiracy()
  }

  getOneConspiracy = (rowid) => {
    return fetch(`http://localhost:7777/conspiracy/${rowid}`)
      .then(res => res.json())
      .then(data => this.setState({ conspiracy: data }))
      .catch(err => console.log("it's not an error, it's aliens", err))
  }

  searchSubmit = (event) => {
    event.preventDefault()
    this.getOneConspiracy()
  }

  onInput = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return(
      <div className="main-container">
      <NavLink className="nav-link" to={'/'}>HOME <span role="img" aria-label="alien face emoji">👽</span></NavLink>
      <NavLink className="nav-link" to={'/conspiracies'}>CONSPIRACIES</NavLink>
      <Search
        searchSubmit={this.searchSubmit}
        onInput={this.onInput}
      />
      <br/>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/conspiracies' component={ AllConspiraciesContainer }/>
        </Switch>
      </div>
    )
  }
}

export default App;
