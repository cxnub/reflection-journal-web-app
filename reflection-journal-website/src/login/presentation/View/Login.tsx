import "./login.css";

function Login() {
  function New_Account() {
    console.log("New Account button clicked");
    window.location.replace("http://localhost:5173/signup.html");
  }
  return (
    <>
    {console.log("test")}
      <div className="container-fluid background-color-lightskin">
        <div className="row">
          <div className="col-md-6">
            <div className="picture-logo">
              <img src="" width='240' height='240'></img>
              <p>This is place holder text</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="login-form rounded bg-brown p-4">
              <form>
                <div className="form-group">
                  <div>
                    <label className="form-label text-white">Username:</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="email"
                    ></input>
                    <br></br>
                  </div>
                </div>
                <div className="form-group">
                  <div>
                    <label className="form-label text-white">Password:</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      placeholder="password"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <a href="#" className="text-white">
                    Forgot Password?
                  </a>
                </div>
                <hr className="line"></hr>
                <button type="submit" className="btn btn-dark">
                  Login
                </button>
                <button type="button" className="btn btn-dark" onClick={New_Account}>
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
