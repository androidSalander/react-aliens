import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import FormContainer from '../containers/FormContainer'

function FormLink() {
  return(
    <div>
      <h2>Submit Your Own Ancient Astronaut Theory!</h2>
      <NavLink to={'/submit'}>click here</NavLink>
    </div>
  )
}

export default FormLink
