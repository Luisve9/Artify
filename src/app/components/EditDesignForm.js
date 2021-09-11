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
                    <label><input className="uk-checkbox" type="checkbox" value="Abstract" onChange={handleTags}/> Abstract</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Nature" onChange={handleTags}/> Nature</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Art" onChange={handleTags}/> Art</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Textures" onChange={handleTags}/> Textures</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Beauty/Fashion" onChange={handleTags}/> Beauty/Fashion</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Landscape" onChange={handleTags}/> Landscape</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Photograph" onChange={handleTags}/> Photograph</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Digital design" onChange={handleTags}/> Digital design</label>
                    <label><input className="uk-checkbox" type="checkbox" value="Food" onChange={handleTags}/> Food</label>
                    <label><input className="uk-checkbox" type="checkbox" value="VideoGames" onChange={handleTags}/> VideoGames</label>
                </div>

                <div className="uk-margin">
                    <button className="uk-button uk-button-default uk-button-large uk-width-1-1">Edit design</button>
                </div>
            </form>
            <div className="uk-margin">
                <button className="uk-button uk-button-default uk-button-large uk-width-1-1" onClick={handleDelete} >Delete design</button>
            </div>
            <hr className="uk-divider-icon"></hr>
        </div>
    )
}

export default EditDesignForm