import "./Register.css"
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">register</span>
        <form  className="registerForm">
            <label>UserName</label>
            <input type="text" className="registerInput" placeholder="Enter your UserName"/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your Email Address"/>
            <label>Password</label>
            <input type="password" className="registerInput" placeholder="Enter your password"/>
            <button className="registerButton">Register</button>
        </form>
            <button className="registerLoginButton">
            <Link to="/login" className="link">LOGIN</Link>
            </button>
    </div>
  )
}
 