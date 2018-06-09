import React from 'react'

import reactIcon from '../../public/images/react-icon.svg'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <span className="emphasize">Hello</span> React
        </h1>
        <img src={reactIcon} style={{ height: '200px' }} />
      </div>
    )
  }
}
