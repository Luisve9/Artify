import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { logoutEndpoint } from '../services/auth-ws';
import { useHistory } from "react-router";

const NavCreator = () => {
    const history = useHistory();

    const handleLogOut = () => {
        logoutEndpoint()
            .then(res => {
                localStorage.removeItem('data')
                history.push('/')
            })
            .catch()
    }

    return(
        <nav className="uk-navbar-container uk-margin" uk-navbar='true'>
            <div className="uk-navbar-left">

                <a className="uk-navbar-item uk-logo" href="#">LogoC</a>

                <ul className="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                            Uploaded
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                            New Upload
                        </a>
                    </li>
                    <li>
                        <a href="#"  onClick={handleLogOut}>
                            <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                            Log out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavCreator