import React, { Component } from 'react'
//import { Switch, Route } from 'react-router-dom'
import '../App.css'
//import FormLink from '../components/FormLink'
//import Delete from '../components/Delete'
import FormContainer from './FormContainer'
import UpdateForm from '../components/UpdateForm'

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

  handleDelete = (rowid) => {
    //console.log(this.state.conspiracies)
    fetch(`http://localhost:7777/conspiracy/${rowid}`, {
      method: 'DELETE'
    })
      .then(res => {
        console.log('ayy lmao', res)
      })
      .catch(err => console.log("it's not an error, it's aliens", err))
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitUpdate = (event) => {
    event.preventDefault()
    return fetch(`http://localhost:7777/conspiracy`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        keyword: this.state.keyword,
        description: this.state.description,
        proof: this.state.proof,
        mainstream_science: this.state.mainstream_science,
        year: this.state.year
      })
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      this.setState({
        keyword: '',
        description: '',
        proof: '',
        mainstream_science: '',
        year: ''
      }, () => {
        this.getAllConspiracies()
      })
    })
    .catch(error => console.log(error))
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
            <button onClick={() => this.handleDelete(conspiracy.rowid)}>Delete</button>
            <UpdateForm
              {...this.state}
              handleUpdate={this.handleUpdate}
              submitUpdate={() => this.submitUpdate(conspiracy.rowid)}
            />
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
