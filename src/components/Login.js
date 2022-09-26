import { useState } from 'react';

function Login() {
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
    <div className="Login">
      <form onSubmit={hundleSubmit}>
        <h3>Sign In</h3>
        <div>
          <label htmlFor="email_check">
            Email address
            <input
              name="email"
              onChange={hundleChange}
              id="email_check"
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </label>
        </div>
        <div>
          <label htmlFor="pass">
            Password
            <input
              name="password"
              onChange={hundleChange}
              id="pass"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </label>
        </div>
        <div>
          <div className="custom-control custom-checkbox">
            <label className="custom-control-label" htmlFor="customCheck1">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              Remember me
            </label>
          </div>
        </div>
        <div>
          <button type="submit">
            Submit
          </button>
        </div>
        <p className="forgot-password">
          Forgot
          <a href="/">password?</a>
        </p>
        <p className="forgot-password">
          Dont have an account?
          {' '}
          <a href="/sign_up">sign up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
