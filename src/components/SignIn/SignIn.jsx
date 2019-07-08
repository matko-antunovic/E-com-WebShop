import React, { Component } from 'react'
import "./SignIn.scss";
import FormInput from "../FormInput/FormInput"
import CustomButton from "../Button/CustomButton"
import {signInWithGoogle} from "../../firebase/firebase"

class SignIn extends Component {

    state={
        email:"",
        password:""
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
        email:"",
        password:""
        })
    }

    handleChange=(e)=>{
        const{value,name}=e.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" name="email" type="email" value={this.state.email} required/>
                    <FormInput handleChange={this.handleChange} label="password" name="password" type="password" value={this.state.password} required/>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;