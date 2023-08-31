import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {firstname: '', lastname: ''}

  onSubmitform = event => {
    event.preventDefault()
  }

  onChangefirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangelastname = event => {
    this.setState({lastname: event.target.value})
  }

  render() {
    const {firstname, lastname} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Registration</h1>
        <div className="input-container">
          <form className="form" onSubmit={this.onSubmitform}>
            <label htmlFor="firstname" className="label">
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstname"
              className="input"
              placeholder="First name"
              onChange={this.onChangefirstname}
              value={firstname}
            />

            <label htmlFor="lastname" className="label">
              LAST NAME
            </label>
            <input
              type="text"
              className="input"
              id="lastname"
              placeholder="Lastname"
              onChange={this.onChangelastname}
              value={lastname}
            />
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
