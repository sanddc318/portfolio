import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import BodyClassName from 'react-body-classname'

const links = ['Home', 'About', 'Projects', 'Skills', 'Contact']

const NavModal = props => (
  <BodyClassName className="no-scroll">
    <div className="outer-box--modal">
      <div className="container--modal">
        <h2>Jump to...</h2>

        {links.map((link, idx) => (
          <AnchorLink
            key={idx}
            href={`#${link.toLowerCase()}`}
            onClick={props.handleToggleModal}
            className="nav-links"
          >
            {link}
          </AnchorLink>
        ))}
      </div>
    </div>
  </BodyClassName>
)

export default NavModal
