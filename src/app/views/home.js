
import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import Intro from '../components/Intro';
import NavBar from '../components/NavBar';

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
        </div>
    )
}

export default Home