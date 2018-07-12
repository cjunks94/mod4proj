import React from 'react';

const SignUpForm = (props) => {

    const inputs = Object.keys(props.fields).map(key => (
        <div>
            <input 
                type={key.includes('password') ? 'password' : 'text'}
                //transforms name value from camelCase to snake_case
                name={key.split(/(?=[A-Z])/).join('_').toLowerCase()} 
                //transforms placeholder value from lowercase to Titlecase
                placeholder={key.charAt(0).toUpperCase() + key.slice(1)} 
            /><br/>
        </div>
    ));

    return (
        <form onChange={props.handleChange} onSubmit={props.handleSubmit}>
            {inputs}
            <button className="submit" type='submit' >Submit</button>
      </form>
    )
};

export default SignUpForm;
