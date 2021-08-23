import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";

const NavBar = () => (
    <nav className="uk-navbar-container uk-margin" uk-navbar='true'>
        <div className="uk-navbar-left">

            <a className="uk-navbar-item uk-logo" href="#">Logo</a>

            <ul className="uk-navbar-nav">
                <li>
                    <a href="#">
                        <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                        Conocenos
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                        Nuestro equipo
                    </a>
                </li>
            </ul>

            <div className="uk-navbar-item">
                <form>
                    <button className="uk-button uk-button-default">Log in</button>
                </form>
            </div>
        </div>
    </nav>
)

export default NavBar