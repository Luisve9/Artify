import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import background from '../assets/images/background1.png'

const Intro = () => (
    <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" data-srcset={background} uk-img='true'>
        <h1>Bienvenido a Artify</h1>
    </div>
)

export default Intro