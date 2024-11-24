import React, { Component } from 'react';

class UserInputForm extends Component {
  state = {
    name: '',
    age: '',
    location: '',
    bio: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddUser(this.state);
    this.setState({ name: '', age: '', location: '', bio: '' });
  };

  render() {
    const { name, age, location, bio } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={this.handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={location}
          onChange={this.handleChange}
          required
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={bio}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add Profile</button>
      </form>
    );
  }
}

export default UserInputForm;
