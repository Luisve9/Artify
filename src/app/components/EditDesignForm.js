import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import './styles/compStyles.css';
import React, {useState, useEffect} from 'react';
import { updateDesignEndPoint, deleteDesignEndPoint } from "../services/design-ws";

const EditDesignForm = (props) => {

    const [data,setData] = useState(props.editDesign)
    const [selectedTags, setTags] = useState([])
    

    const handleChange = (e) => {
        setData({...data, [e.target.name]:e.target.value})
    }

    const handleTags = (e) => {
        let array = selectedTags
        if(array.includes(e.target.value)){
            array.splice(array.indexOf(e.target.value), 1)
        } else {
            array.push(e.target.value)
        }
        setTags(array)
        setData({...data, tags: selectedTags})
    }


    const onSubmit = (e) => {
        e.preventDefault()
        
        updateDesignEndPoint(data)
            .then(res => {
                console.log("I was updated")
            })
            .catch()
        
    }

    const handleDelete = () => {
        console.log(data)
        deleteDesignEndPoint(data._id)
            .then(res => {
                console.log("I was deleted")
            })
            .catch()

    }


    return(
        <div>
            <form onSubmit={onSubmit} className="uk-form-stacked designForm">

                <div className="uk-margin">
                    <div className="uk-form-controls">
                        <input className="uk-input" id="form-stacked-text" type="text" name='title' placeholder={props.editDesign.title} onChange={handleChange}/>
                    </div>
                </div>

                <span className =".uk-text-default">Select new tags</span>

                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label><input className="uk-checkbox" type="checkbox" value="Abstract" onChange={handleTags}/> Abstracto</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Nature" onChange={handleTags}/> Naturaleza</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Art" onChange={handleTags}/> Arte</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Textures" onChange={handleTags}/> Texturas</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Beauty/Fashion" onChange={handleTags}/> Fashion</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Landscape" onChange={handleTags}/> Paisajes</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Photograph" onChange={handleTags}/> Fotografia</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Digital design" onChange={handleTags}/> Diseño Digital</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Food" onChange={handleTags}/> Comida</label>
                    <label><input className="uk-checkbox" type="checkbox" value="VideoGames" onChange={handleTags}/> Videojuegos</label>
                </div>

                <div className="uk-margin">
                    <button className="uk-button uk-button-default uk-button-large uk-width-1-1">Editar diseño</button>
                </div>
            </form>
            <div className="uk-margin">
                <button className="uk-button uk-button-default uk-button-large uk-width-1-1" onClick={handleDelete} >Borrar diseño</button>
            </div>
            <hr className="uk-divider-icon"></hr>
        </div>
    )
}

export default EditDesignForm