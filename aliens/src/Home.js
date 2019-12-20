import React from 'react'
import Giorgio from './images/myManGiorgio.jpg'


function Home() {
  return(
    <div>
      <img src={Giorgio} alt='Giorgio Tsoukalos saying "ALIENS."'/>
      <h1>Welcome to the Ancient Astronaut App! <span role="img" aria-label="alien face emoji">👽</span></h1>
      <p>Last year I got into the habit of watching Ancient Aliens and playing Switch games after work. I thought I could turn this into a learning experience if I sat down and researched the real science and history behind Ancient Astronaut Theory. This is a site for posting the various conspiracies presented over 10 years of History Channel's greatest comedic achievement.</p>
      <p>Watch <span className="title">Ancient Aliens </span><a target="_blank" href="http://watchancientaliensonline.blogspot.com"><span role="img" aria-label="UFO emoji">🛸</span></a></p>
    </div>
  )
}

export default Home
