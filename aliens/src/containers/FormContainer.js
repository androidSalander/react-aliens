import React, { Component } from 'react'
import Form from '../components/Form'

class FormContainer extends Component {
  state = {
    keyword: '',
    description: '',
    proof: '',
    mainstream_science: '',
    year: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    return fetch('http://localhost:7777/conspiracy', {
      method: 'POST',
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
        this.props.getAllConspiracies()
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return(
      <div>
        <h1>Submit Your Own Ancient Astronaut Theory!</h1>
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default FormContainer
