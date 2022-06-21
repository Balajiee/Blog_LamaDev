import "./Login.css"
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form  className="logInForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your Email Address"/>
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password"/>
            <button className="loginButton">LogIn</button>
        </form>
            <button className="loginRegisterButton">Register</button>
            <Link to="/register"className="link">Register</Link>
    </div>
  )
}
