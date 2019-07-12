import React from 'react'
import "./Auth.scss"
import SignIn from "../../components/SignIn/SignIn"
import SignUp from "../../components/sign-up/SignUp"

const Auth = () => {
    return (
        <div className="Auth">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Auth;
