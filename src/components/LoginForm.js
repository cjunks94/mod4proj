import React from 'react';

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
        fetch('http://localhost:3000/api/v1/login', options)
        .then(resp => resp.json())
        .then(user => {
            this.props.handleLogin(user)
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
                
                <button type="submit" className="basic button">
                    Login
                </button>
            </form>
        );
    }
};

export default LoginForm;