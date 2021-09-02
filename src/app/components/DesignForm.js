import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import './styles/compStyles.css';
import React, {useState, useEffect} from 'react';
import { createDesignEndPoint } from "../services/design-ws";

const DesignForm = () => {
    const [data,setData] = useState({})
    const [selectedTags, setTags] = useState([])
    

    const handleChange = (e) => {
        const {_id} = JSON.parse(localStorage.getItem("data"))
        setData({...data, [e.target.name]:e.target.value, _creator: _id})
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
        
        const formData = new FormData();
        for(let key in data) {
            formData.append(key, data[key])
        }
        
        createDesignEndPoint(formData)
            .then(res => {
                console.log("I was created")
            })
            .catch()
        
    }

    const uploadFile = (e) => {
        setData({...data, imgDesign:e.target.files[0]})
    }

    return(
        <form onSubmit={onSubmit} className="uk-form-stacked designForm">

            <div className="uk-margin">
                <div className="uk-form-controls">
                    <input className="uk-input" id="form-stacked-text" type="text" name='title' placeholder="Title" onChange={handleChange}/>
                </div>
            </div>

            <span className =".uk-text-default">Select the relevant Tags so the user can find your work according their interest</span>

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
                <div uk-form-custom="target: true"/*???*/>
                    <input type="file" name="imgDesign" onChange={uploadFile}/>
                    <input className="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled/>
                </div>
                {/*<button class="uk-button uk-button-default">Submit</button>*/}
            </div>

            <div className="uk-margin">
                <button className="uk-button uk-button-default uk-button-large uk-width-1-1">Upload design</button>
            </div>
        </form>
    )
}

export default DesignForm