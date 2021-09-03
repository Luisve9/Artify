import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { getAllDesignEndPoint } from "../services/design-ws";
import CardDesign from '../components/CardDesign';
import TagsSearch from '../components/TagsSearch';
import NavBar from '../components/NavBar';

function Browse () {
    const [data,setData] = useState([])
    const [filterData, setFilter] = useState([])

    useEffect(()=>{
        getAllDesignEndPoint()
            .then(res =>{
                setData(res.data.designs)
                setFilter(res.data.designs)
            })
            .catch()
    },[])

    const handleSearch = (tagsArray) => {
        const filter = data.filter(design => design.tags.some(tag=> tagsArray.includes(tag)))
        console.log(filter)
        if(filter.length > 0){
            setFilter(filter)
        } else {
            setFilter(data)
        }
    }

    return (
        <div>
            <NavBar/>
            <h1>Ve los diseños de acuerdo a las etiquetas de tu interés</h1>
            <TagsSearch handler={handleSearch}/>
            {
                filterData.map((design, index) => (
                    <CardDesign key={index} designData={design}/>
                ))
            }
            
        </div>
    )
}

export default Browse