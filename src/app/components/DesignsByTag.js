import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "./styles/compStyles.css";
import { getDesignByTagEndPoint } from "../services/design-ws";
import CardDesign from './CardDesign';

function DesignsByTag ({tag}) {
    const [data,setData] = useState([]);
    const [islogged, setLogged] = useState(false);
    let content;

    useEffect(()=>{
        getDesignByTagEndPoint(tag)
            .then(res =>{
                setData(res.data.designs)
            })
            .catch()

        if(JSON.parse(localStorage.getItem("data"))) setLogged(true)
    },[])

    if(data && data.length > 0) {
        content =
            <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slider="center: true">
                <ul className="uk-slider-items uk-grid">
                    {
                        data.map((design, index) => (
                            <li className="uk-width-3-4" key={index}>
                                <div className="uk-panel">
                                    <CardDesign designData={design} download={islogged}/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <a className="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large DesignByTag-slideColor" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large DesignByTag-slideColor" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
            </div>
    } else {
        content = <p>no existen diseños con esta tag, haz tu cuenta de creador y se el primero en cargar</p>
    }
    return (
        <div>
            <h3 className="uk-heading-small uk-heading-bullet">{tag}</h3>
                {
                    content
                }
        </div>
    )
}

export default DesignsByTag