import React, { Component } from 'react'

class UpdateForm extends Component {
  state = {
    keyword: this.props.keyword,
    description: this.props.description,
    proof: this.props.proof,
    mainstream_science: this.props.mainstream_science,
    year: this.props.year,
  }

  submitUpdate = (event) => {
    event.preventDefault()
    return fetch(`http://localhost:7777/conspiracy/${this.props.rowid}`, {
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
        this.props.getAllConspiracies()
      })
    })
    .catch(error => console.log(error))
  }

  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <p>Something wrong?? Update!</p>
        <form
          type="text"
          className="submit-theory"
          onSubmit={this.submitUpdate}
        >
          <input
            type="text"
            placeholder="Keyword"
            name="keyword"
            onChange={this.handleUpdate}
            value={this.state.keyword}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.handleUpdate}
            value={this.state.description}
          />
          <input
            type="text"
            placeholder="Proof"
            name="proof"
            onChange={this.handleUpdate}
            value={this.state.proof}
          />
          <input
            type="text"
            placeholder="Mainstream Science"
            name="mainstream_science"
            onChange={this.handleUpdate}
            value={this.state.mainstream_science}
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={this.handleUpdate}
            value={this.state.year}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UpdateForm
