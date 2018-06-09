import React from 'react'

import SplashPage from './SplashPage'
import About from './About'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SplashPage />
        <About />
      </div>
    )
  }
}
