import React from 'react';
import SignUpForm from './components/SignUpForm'

class SignUpContainer extends React.Component {

  state = {
      fields: {
          username: '',
          password: '',
          passwordConfirmation: '',
      }
  };

  handleChange = (e) => {
      console.log(e.target.name)
      const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
      this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const options = {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify(this.state.fields)
      }
      fetch('http://localhost:3000/api/v1/users', options)
      // .then(resp => resp.json())
      // .then(console.log)
  };

  render(){

    
    return (
      <div>
        <h1>Sign Up Page</h1>
        < SignUpForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
};

export default SignUpContainer;
