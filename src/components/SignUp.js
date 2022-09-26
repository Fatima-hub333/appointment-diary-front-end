import { useState } from 'react';

function SignUp() {
  const [inputs, setInputs] = useState({});

  const hundleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const hundleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="SignUp">
      <form onSubmit={hundleSubmit}>
        <h3>Sign Up</h3>
        <div>
          <label htmlFor="name">
            Name
            <input
              onChange={hundleChange}
              name="name"
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </label>
        </div>
        <div>
          <label htmlFor="email1">
            Email address
            <input
              onChange={hundleChange}
              name="email"
              id="email1"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </label>
        </div>
        <div>
          <label htmlFor="pass1">
            Password
            <input
              onChange={hundleChange}
              name="password"
              id="pass1"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </label>
        </div>
        <div>
          <label htmlFor="confpass">
            Password Confirmation
            <input
              onChange={hundleChange}
              name="confirmpassword"
              id="confpass"
              type="password"
              className="form-control"
              placeholder="Confirm password"
            />
          </label>
        </div>
        <div className="d-grid">
          <button type="submit">
            Sign Up
          </button>
        </div>
        <p className="forgot-password">
          Already registered?
          {' '}
          <a href="/">sign in</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
