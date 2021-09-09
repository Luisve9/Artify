import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import './styles/viewStyle.css';
import NavCreator from '../components/NavCreator';
import { getDesignByIdEndPoint } from "../services/design-ws";
import CardDesign from '../components/CardDesign';
import EditDesignForm from '../components/EditDesignForm';

function MyDesigns () {
    const [data,setData] = useState([{}])
    const [edit,setEdit] = useState([])
    const [change, setChange] = useState(false)
    useEffect(()=>{
        getDesignByIdEndPoint()
            .then(res =>{
                setData(res.data.designs)
            })
            .catch()
    },[])
/*
    useEffect(()=>{
        if(change) {
            console.log("cambie")
            
        }
        setChange(false)
    },[edit])
*/
    const handleClick = (design) => {
        let array = edit
        if(array.includes(design)){
            array.splice(array.indexOf(design), 1)
        } else {
            array.push(design)
        }
        setEdit(array)
        if(change) {
            setChange(false)
        } else {
            setChange(true)
        }
    }

    return (
        <div>
            <NavCreator/>
            <h1 className="uk-heading-medium uk-heading-bullet">Mis diseños</h1>
            <div className="uk-child-width-1-3" uk-grid="true">
                {
                    data.map((design, index) => (
                        <CardDesign key={index} designData={design} handler={handleClick} update={true} download={true}/>
                    ))
                }  
            </div>
            <h2>Edit</h2>
            <h3>Check the box "Edit" if you wish to change your designs title or tags</h3>
            {
                edit.map((design, index) => (
                    <EditDesignForm key={index} editDesign={design}/>
                ))
            }
        </div>
    )
}

export default MyDesigns