import React from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import NavCreator from '../components/NavCreator';
import DesignForm from '../components/DesignForm';
import './styles/viewStyle.css';
import backgroundCreator from '../assets/images/background3.png'

function Creator () {

    return (
        <div>
            <NavCreator/>
            <div className="signuplogin-background uk-height-large uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-background-cover uk-light" data-srcset={backgroundCreator} uk-img='true'>
                <h1 className="uk-heading-small uk-heading-divider">Carga tu diseño</h1>
                <DesignForm/>
            </div>
        </div>
    )
}

export default Creator