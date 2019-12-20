import React from 'react'

function Search(props) {
  return(
    <div>
      <form type="text" onSubmit={props.searchSubmit}>
        <input type="text" placeholder="🔍" onInput={props.onInput}/>
        <button type="submit">Search</button>
      </form>
      <p>{props.conspiracy}</p>
    </div>
  )
}

export default Search
