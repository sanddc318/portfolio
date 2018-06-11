import React from 'react'
import axios from 'axios'

export default class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    e.target.reset()
    this.setState(() => ({ name: '', email: '', message: '' }))

    const { name, email, message } = this.state
    await axios.post('http://localhost:3001/api/form', {
      name,
      email,
      message
    })
  }

  render() {
    return (
      <div>
        <h2>Drop me a line</h2>

        <form onSubmit={this.handleSubmit} className="contact-form">
          <label htmlFor="name" className="contact-input">
            Name
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
          </label>

          <label htmlFor="email" className="contact-input">
            Email
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
          </label>

          <label htmlFor="message" className="contact-input">
            Message
            <textarea
              type="textarea"
              name="message"
              onChange={this.handleChange}
              required
            />
          </label>

          <button type="submit" className="button button--big">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
