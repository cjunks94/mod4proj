import React from 'react';

const SignUp = (props) => {
  return (
    <div>
      <h1>Sign Up Page</h1>
    <form>
      <input type='text' placeholder='username'/><br/>
      <input type='password' placeholder='password' /><br/>
      <button type='submit' >Submit</button>
      {/* on submit send login back to app for state/local storage changeups */}
    </form>
    <button type='button' onClick={props.test}>home?</button>

    </div>
  );
};

export default SignUp;
