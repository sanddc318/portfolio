import React from 'react'

import NavModal from './NavModal'

export default class Nav extends React.Component {
  state = {
    modalOpen: false
  }

  handleToggleModal = () =>
    this.setState(() => ({ modalOpen: !this.state.modalOpen }))

  render() {
    return (
      <div>
        <button className="nav-button" onClick={this.handleToggleModal}>
          Menu
        </button>
        {this.state.modalOpen && (
          <NavModal handleToggleModal={this.handleToggleModal} />
        )}
      </div>
    )
  }
}
