import './register.css'

export default function Register() {
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
                        <input type="Username" className="loginInput" placeholder='Username'/>
                        <input type="Email" className="loginInput" placeholder='Email'/>
                        <input type="Password" className="loginInput" placeholder='Password'/>
                        <input type="Password" className="loginInput" placeholder='Password Again'/>
                        <button className='loginButton'>Sign Up</button>
                        <button className='loginRegisterButton'>Log in Here</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
