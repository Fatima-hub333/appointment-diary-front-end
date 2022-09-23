function Login() {
  return (
    <div className="Login">
      <form>
        <h3>Sign In</h3>
        <div>
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div>
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
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
           <a href="#">password?</a>
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
