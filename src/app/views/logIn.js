
import React from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import AuthForm from '../components/AuthForm';
import background from '../assets/images/background2.jpg'
import './styles/viewStyle.css';

function LogIn () {

    return (
      <div className="signuplogin-background uk-height-large uk-flex uk-flex-around uk-flex-top uk-background-cover uk-light" data-srcset={background} uk-img='true'>
        <AuthForm/>
      </div>
    )
}

export default LogIn