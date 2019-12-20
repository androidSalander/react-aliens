import React from 'react'

function Search(props) {
  //dear search function
  //i want you to take rowid as user input
  //map thru the array of all conspiracies
  //in a new component display the single result from rowid
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
