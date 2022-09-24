function SignUp() {
  return (
    <div className="SignUp">
      <form>
        <h3>Sign Up</h3>
        <div>
          <label htmlFor="name">
            Name
            <input
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
