import "./css/Login.css";

function Login() {
  return (
    <>
      <div className="container-fluid background-color-lightskin">
        <div className="row">
          <div className="col-md-6">
            <div className="picture-logo">
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
                <button type="submit" className="btn btn-light">
                  Create Account
                </button>
                <button id="new_account" onClick={New_Account}>
                  Create Account
                </button>
                {/*<button id ="login" onClick={MyButton}>Login</button>*/}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function New_Account() {
  window.location.replace("http://localhost:5173/index.html");
}
export default Login;
