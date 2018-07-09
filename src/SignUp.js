import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up Page</h1>
    <form>
      <input type='text' placeholder='username'/><br/>
      <input type='password' placeholder='password' /><br/>
      <button type='submit' >Submit</button>
      {/* on submit send login back to app for state/local storage changeups */}
    </form>
    </div>
  );
};

export default SignUp;
