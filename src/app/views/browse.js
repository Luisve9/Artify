import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { getAllDesignEndPoint } from "../services/design-ws";
import CardDesign from '../components/CardDesign';

function Browse () {
    const [data,setData] = useState([{}])

    useEffect(()=>{
        getAllDesignEndPoint()
            .then(res =>{
                setData(res.data.designs)
            })
            .catch()
    },[])


    return (
        <div>
            <h1>Aqui el usuario ve las imagenes</h1>
            {
                data.map((design, index) => (
                    <CardDesign key={index} designData={design}/>
                ))
            }
            
        </div>
    )
}

export default Browse