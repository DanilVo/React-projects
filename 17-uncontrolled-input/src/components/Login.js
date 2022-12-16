import React from 'react';

function Login() {
  function handleFormSubmite(event) {
    event.preventDefault();
    const userData = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    console.log(userData);
    alert(JSON.stringify(userData));
  }
  return (
    <React.Fragment>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmite}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
}

export default Login;
