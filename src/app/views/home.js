
import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';
import DesignsByTag from '../components/DesignsByTag';
function Home () {
    const [islogged, setLogged] = useState(false)

    useEffect(()=>{
        if(JSON.parse(localStorage.getItem("data"))) setLogged(true)
    },[])

    return (
        <div>
            <NavBar logged={islogged}/>
            <hr className="uk-divider-icon"></hr>
            <Intro/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Abstract"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Nature"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Art"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Textures"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Beauty/Fashion"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Landscape"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Photograph"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Digital design"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="Food"/>
            <hr className="uk-divider-icon"></hr>
            <DesignsByTag tag="VideoGames"/>
        </div>
    )
}

export default Home