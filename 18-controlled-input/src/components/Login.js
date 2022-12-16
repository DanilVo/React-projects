import { useState } from 'react';
import React from 'react';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  function handleInputChange(e, name) {
    setData({...data, [name]: e.target.value });
  }

  function handleFormSubmite(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
  }
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmite}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
