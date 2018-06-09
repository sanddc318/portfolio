import React from 'react'

import SplashPage from './SplashPage'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Connect from './Connect'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SplashPage />
        <About />
        <Projects />
        <Skills />
        <Connect />
      </div>
    )
  }
}
