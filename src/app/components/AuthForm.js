import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { useHistory } from "react-router";
import {Link} from 'react-router-dom';
import './styles/compStyles.css';
import React, {useState, useEffect} from 'react';
import {loginEndpoint, signupEndpoint} from '../services/auth-ws';

const AuthForm = () => {
    const [data,setData] = useState({})
    const history = useHistory();

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value })
    }

    const handleRoute = () => {
        if (history.location.pathname === '/signup') return true;
        return false
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(handleRoute()) {
            signupEndpoint(data)
                .then(res => {
                    localStorage.setItem("data",JSON.stringify(res.data.result))
                    history.push('/login')
                })
                .catch()
        } else {
            loginEndpoint(data)
                .then( res => {
                    localStorage.setItem("data",JSON.stringify(res.data.result))
                    history.push('/menuCreator')
                })
                .catch()
        }
    }

    let buttonText;
    let role;
    let userName;

    if (handleRoute()) {
        role = 
            <div className="uk-margin">

                <div className="uk-form-controls">
                    <label><input className="uk-radio" type="radio" name="role" value="Creator" onChange={handleChange}/> Creator</label><br/>
                    <label><input className="uk-radio" type="radio" name="role" value="User" onChange={handleChange}/> Consumer</label>
                </div>
            </div>

        userName = 
            <div className="uk-margin">
                <div className="uk-form-controls">
                    <input className="uk-input" id="form-stacked-text" type="text" name='username' placeholder="Username" onChange={handleChange}/>
                </div>
            </div>
        
        buttonText = "Sign up"
    } else {
        buttonText = "Log in"
    }
    return(
        <form onSubmit={onSubmit} className="uk-form-stacked authForm">

            <div className="uk-margin">
                <div className="uk-form-controls">
                    <input className="uk-input" id="form-stacked-text" type="text" name='email' placeholder="Email" onChange={handleChange}/>
                </div>
            </div>

            {userName}

            {role}

            <div className="uk-margin">
                <div className="uk-form-controls">
                    <input className="uk-input" id="form-stacked-text" type="text" name='password' placeholder="Password" onChange={handleChange}/>
                </div>
            </div>

            <div className="uk-margin">
                <button className="uk-button uk-button-default uk-button-large uk-width-1-1">{buttonText}</button>
            </div>
        </form>
    )
}

export default AuthForm