import React from 'react'

import Nav from './Nav'
import SplashPage from './SplashPage'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Connect from './Connect'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <SplashPage />
        <About />
        <Projects />
        <Skills />
        <Connect />
      </div>
    )
  }
}
