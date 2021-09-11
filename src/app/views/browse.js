import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import { getAllDesignEndPoint } from "../services/design-ws";
import { loggedInEndpoint } from "../services/auth-ws";
import CardDesign from '../components/CardDesign';
import TagsSearch from '../components/TagsSearch';
import NavBar from '../components/NavBar';


function Browse () {
    const [data,setData] = useState([])
    const [filterData, setFilter] = useState([])
    const [islogged, setLogged] = useState(false)

    useEffect(()=>{
        getAllDesignEndPoint()
            .then(res =>{
                setData(res.data.designs)
                setFilter(res.data.designs)
            })
            .catch()

        if(JSON.parse(localStorage.getItem("data"))) setLogged(true)
    },[])

    const handleSearch = (tagsArray) => {
        const filter = data.filter(design => design.tags.some(tag=> tagsArray.includes(tag)))
        if(filter.length > 0){
            setFilter(filter)
        } else {
            setFilter(data)
        }
    }

    return (
        <div>
            <NavBar logged={islogged}/>
            <h1 className="uk-heading-small uk-heading-bullet">Ver diseños</h1>
            <TagsSearch handler={handleSearch}/>
            <div className="uk-child-width-1-3" uk-grid="true">
            {
                filterData.map((design, index) => (
                    <CardDesign key={index} designData={design} download={islogged}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Browse