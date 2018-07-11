import React from 'react';

const SignUpForm = (props) => {
    console.log(props.fields)

    return (
        <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
            <input type='text' name="username" placeholder='Username'/><br/>
            <input type='password' name="password" placeholder='Password' /><br/>
            <input type='password' name="passwordConfirmation" placeholder='Confirm Password' /><br/>
            <button type='submit' >Submit</button>
            {/* on submit send login back to app for state/local storage changeups */}
      </form>
    )
};

export default SignUpForm;
