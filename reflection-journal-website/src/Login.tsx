import './css/Login.css'

function Login() {
  
    return (
        <div className="Login">
            <h1>Login</h1><br></br>
            <input type="text" id="email" name="email"  placeholder = "email"></input><br></br>
            <input type="text" id="password" name="password" placeholder = "password"></input>
            <hr></hr>
            <button id ="new_account" onClick={New_Account}>Create Account</button>
            {/*<button id ="login" onClick={MyButton}>Login</button>*/}
        </div>
    )
}
function New_Account(){
    window.location.replace('http://localhost:5173/index.html')
}
export default Login