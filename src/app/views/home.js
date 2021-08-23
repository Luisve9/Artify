
import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';

function Home () {

    return (
        <div>
            <NavBar/>
            <hr class="uk-divider-icon"></hr>
            <Intro/>
            <hr class="uk-divider-icon"></hr>
        </div>
    )
}

export default Home