import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import {Link} from 'react-router-dom';
import { logoutEndpoint } from '../services/auth-ws';
import { useHistory } from "react-router";
import React from 'react';

const NavBar = (props) => {
    const history = useHistory();
    let signup;
    let login;
    let logout;

    const handleLogOut = () => {
        logoutEndpoint()
            .then(res => {
                localStorage.removeItem('data')
                history.push('/') 
                window.location.reload();
            })
            .catch()
    }

    if(props.logged) {
        logout =
            <li>
                <a onClick={handleLogOut}>
                    Log out
                </a>
            </li>;
    } else {
        signup = 
            <li>
                <Link to = {{pathname :'signup'}}>Sign up</Link>
            </li>;
        login =
            <li>
                <Link to = {{pathname :'login'}}>Log in</Link>
            </li>;   
    }

    return (
        <nav className="uk-navbar-container uk-margin" uk-navbar='true'>
            <div className="uk-navbar-left">

                <a className="uk-navbar-item uk-logo" href="#">Artify</a>

                <ul className="uk-navbar-nav">
                    <li>
                        <Link to = {{pathname :'/'}}>Artify</Link>
                    </li>
                    {logout}
                    {signup}
                    {login}
                    <li>
                        <Link to = {{pathname :'browse'}}>Ver diseños</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )   
}
export default NavBar