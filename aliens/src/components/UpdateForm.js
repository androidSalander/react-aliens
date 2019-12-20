import React, { Component } from 'react'

class UpdateForm extends Component {
  render() {
    return(
      <div>
        <h1>Update a Theory!</h1>
        <form
          type="text"
          className="submit-theory"
          onSubmit={this.props.submitUpdate}
        >
          <input
            type="text"
            placeholder="Keyword"
            name="keyword"
            onChange={this.props.handleChange}
            value={this.props.keyword}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={this.props.handleChange}
            value={this.props.description}
          />
          <input
            type="text"
            placeholder="Proof"
            name="proof"
            onChange={this.props.handleChange}
            value={this.props.proof}
          />
          <input
            type="text"
            placeholder="Mainstream Science"
            name="mainstream_science"
            onChange={this.props.handleChange}
            value={this.props.mainstream_science}
          />
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={this.props.handleChange}
            value={this.props.year}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default UpdateForm
