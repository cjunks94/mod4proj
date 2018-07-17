import React from 'react';
import BASEURL from './baseURL';


class LoginForm extends React.Component {
    state = {
        fields: {
            username: '',
            password: ''
        }
    };

    handleChange = (e) => {
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
        fetch(`${BASEURL}/login`, options)
        .then(resp => resp.json())
        .then(user => {
          console.log(user)
            if (user.error) {
                alert(user.error)
            } else {
                this.props.handleLogin(user)
            }
        })
    };

    render() {
        const { fields } = this.state;
        return (
            <form id="login-form" onSubmit={this.handleSubmit}>
                <input
                name="username"
                placeholder="Username"
                value={fields.username}
                onChange={this.handleChange}
                />

                <input
                name="password"
                type="password"
                placeholder="Password"
                value={fields.password}
                onChange={this.handleChange}
                />

                <button type="submit" className="button">
                    Login
                </button>
            </form>
        );
    }
};

export default LoginForm;
