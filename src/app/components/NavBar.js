import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav className="uk-navbar-container uk-margin" uk-navbar='true'>
        <div className="uk-navbar-left">

            <a className="uk-navbar-item uk-logo" href="#">Logo</a>

            <ul className="uk-navbar-nav">
                <li>
                    <Link to = {{pathname :'/'}}>Artify</Link>
                </li>
                <li>
                    <a href="#">
                        <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                        Our Team
                    </a>
                </li>
                <li>
                    <Link to = {{pathname :'browse'}}>Browse for Designs</Link>
                </li>
                <li>
                    <Link to = {{pathname :'signup'}}>Sign up</Link>
                </li>
                <li>
                    <Link to = {{pathname :'login'}}>Log in</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar