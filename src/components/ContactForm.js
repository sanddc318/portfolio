import React from 'react'
import axios from 'axios'

export default class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleSubmit = this.handleSubmit.bind(this)

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = this.state
    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="message">
            <input
              type="textarea"
              name="message"
              placeholder="Message"
              onChange={this.handleChange}
            />
          </label>

          <button>Submit</button>
        </form>
      </div>
    )
  }
}
