import React, { Component } from 'react'
//import { Switch, Route } from 'react-router-dom'
import '../App.css'
//import FormLink from '../components/FormLink'
//import Delete from '../components/Delete'
import FormContainer from './FormContainer'

class AllConspiraciesContainer extends Component {
  state = {
    conspiracies: []
  }


  componentDidMount() {
    this.getAllConspiracies()
  }

  getAllConspiracies = () => {
    return fetch('http://localhost:7777/conspiracy')
      .then(res => res.json())
      .then(data => this.setState({ conspiracies: data }))
      .catch(err => console.log("it's not an error, it's aliens", err))
  }

  handleDelete = () => {
    console.log(this.state.conspiracies)
    fetch(`http://localhost:7777/conspiracy/${this.state.conspiracies.rowid}`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log('ayy lmao')
      })
      .catch(err => console.log("it's not an error, it's aliens", err))
  }

  render() {
    let conspiracyList = this.state.conspiracies.map(conspiracy => {
      return (
        <div className="display-all">
          <li>
            <strong>Keyword:</strong> {conspiracy.keyword} <br/>
            <strong>Description:</strong> {conspiracy.description} <br/>
            <strong>Proof:</strong> {conspiracy.proof} <br/>
            <strong>Mainstream Science Says:</strong> {conspiracy.mainstream_science} <br/>
            <strong>Year:</strong> {conspiracy.year} <br/>
            <button onClick={this.handleDelete}>Delete</button>
            <button>Update</button>
          </li>
        </div>
      )
    })
    return(
      <div>
        <h1>CONSPIRACIES</h1>
        <ul>
          {conspiracyList}
        </ul>
        <FormContainer getAllConspiracies={this.getAllConspiracies} />
        {/*<FormLink />
        <Switch>
          <Route path='/submit' component={ FormContainer } />
        </Switch>*/}
      </div>
    )
  }
}

export default AllConspiraciesContainer
