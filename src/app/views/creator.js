import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import NavCreator from '../components/NavCreator';
import DesignForm from '../components/DesignForm';

function Creator () {

    return (
        <div>
            <NavCreator/>
            <h1>Aqui el artista carga la imagen</h1>
            <DesignForm/>
        </div>
    )
}

export default Creator