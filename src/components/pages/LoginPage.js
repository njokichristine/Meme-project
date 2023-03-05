import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2 id="sign-in-h2">Sign in</h2>
            <form action="/memes" className='loginForm'>
                <p>
                    <input type="text" name="first_name" required placeholder='Email address or username'/>
                </p>
                <p>
                    <br/>
                    <input type="password" name="password" required placeholder='Your password'/>
                </p>
                <Link to="/forgot-password"><label className="forgotPassword">Forgot password?</label></Link>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}