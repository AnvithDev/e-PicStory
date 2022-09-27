import './login.css'

export default function Login() {
  return (
    <>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">e-picStory</h3>
                    <spn className="loginDesc">Share your epic story with friends and the world around you</spn>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input type="Email" className="loginInput" />
                        <input type="Password" className="loginInput" />
                        <button className='loginButton'>Log In</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className='loginRegisterButton'>Create a new Account</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
