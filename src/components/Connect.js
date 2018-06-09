import React from 'react'

import ContactForm from './ContactForm'

const Connect = () => (
  <div className="outer-box outer-box--inverted">
    <div className="container container--inverted">
      <h1 className="component-header">&nbsp; Connect &nbsp;</h1>

      <ContactForm />

      <h2>Find me on the web</h2>
      <ul className="component__list">
        <li className="component__list--item">
          <a href="https://github.com/sanddc318">GitHub</a>
        </li>
        <li className="component__list--item">
          <a href="https://linkedin.com/in/dontavioussanders">LinkedIn</a>
        </li>
        <li className="component__list--item">
          <a href="#">Xbox</a>
        </li>
      </ul>
    </div>
  </div>
)

export default Connect
