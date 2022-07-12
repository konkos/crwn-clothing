import React from 'react'
import SignInForm from '../../components/sign-in/sign-in-form.component';
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import './authentication.styles.scss'

export default function Authentication() {



    return (
        <div className="authentication-container">
            {/* <button onClick={logGoogleUser} >Sign in with google popup</button> */}

            <SignInForm />
            <SignUpForm />
        </div>
    )
}
