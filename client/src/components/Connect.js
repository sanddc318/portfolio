import React from 'react'

import ContactForm from './ContactForm'

const Connect = () => (
  <div className="outer-box outer-box--inverted" id="contact">
    <div className="container container--inverted">
      <h1 className="component-header">&nbsp; Connect &nbsp;</h1>

      <ContactForm />

      <h2>Find me on the web</h2>
      <ul className="component__list">
        <li className="component__list--item">
          <a
            href="https://github.com/sanddc318"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="component__list--item">
          <a
            href="https://linkedin.com/in/dontavioussanders"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="component__list--item">
          <a href="https://xbox.com" target="_blank" rel="noopener noreferrer">
            Xbox
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Connect
