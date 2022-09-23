function SignUp() {
  return (
    <div className="SignUp">
      <form>
        <h3>Sign Up</h3>
        <div>
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
          />
        </div>
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
          <label>Password Confirmation</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
          />
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
