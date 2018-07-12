import React from 'react';
import Form from './components/Form'

class SignUpContainer extends React.Component {

  state = {
      fields: {
          username: '',
          password: '',
          passwordConfirmation: '',
          firstName: '',
          lastName: '',
          email: ''
      },
      data: {}
  };

  handleChange = (e) => {
      //transforms name value from snake_case to camelCase
      const name = e.target.name.replace(/_([a-z])/g, (str) => str[1].toUpperCase() )
      const newFields = { ...this.state.fields, [name]: e.target.value };
      this.setState({ 
          fields: newFields, 
          data: {...this.state.data, [e.target.name]: e.target.value}
        });
  };

  handleSubmit = (e) => {
      e.preventDefault();
      const options = {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
          },
          body: JSON.stringify(this.state.data)
      }
      fetch('http://localhost:3000/api/v1/users', options)
      .then(resp => resp.json())
      .then(console.log)
  };

  render(){


    return (
      <div>
        <h1>Sign Up Page</h1>
        < Form fields={this.state.fields} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
};

export default SignUpContainer;
