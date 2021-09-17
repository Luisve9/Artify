import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import UIkit from 'uikit';
import './styles/compStyles.css';
import React, {useState, useEffect} from 'react';
import { createDesignEndPoint } from "../services/design-ws";

const DesignForm = () => {
    const [data,setData] = useState({})
    const [selectedTags, setTags] = useState([])
    const [disableButton, setButton] = useState(false)

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
        setButton(true)
        
        const formData = new FormData();
        for(let key in data) {
            formData.append(key, data[key])
        }
        
        createDesignEndPoint(formData)
            .then(res => {
                UIkit.notification("Carga exitosa", {status:'success'})
                setButton(false)
            })
            .catch( err => {
                UIkit.notification("No se pudo cargar: tamaño max = 20 MB; Formatos soportados: jpg, png, jpeg", {status:'danger'})
                setButton(false)
            })
        
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

            <span className =".uk-text-default">Selecciona las tags relevantes a tu diseño</span>

            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input className="uk-checkbox" type="checkbox" value="Abstract" onChange={handleTags}/> Abstracto</label>
                <label><input className="uk-checkbox" type="checkbox" value="Nature" onChange={handleTags}/> Naturaleza</label>
                <label><input className="uk-checkbox" type="checkbox" value="Art" onChange={handleTags}/> Arte</label>
                <label><input className="uk-checkbox" type="checkbox" value="Textures" onChange={handleTags}/> Texturas</label>
                <label><input className="uk-checkbox" type="checkbox" value="Fashion" onChange={handleTags}/> Fashion</label>
                <label><input className="uk-checkbox" type="checkbox" value="Landscape" onChange={handleTags}/> Paisajes</label>
                <label><input className="uk-checkbox" type="checkbox" value="Photograph" onChange={handleTags}/> Fotografia</label>
                <label><input className="uk-checkbox" type="checkbox" value="Digital design" onChange={handleTags}/> Diseño Digital</label>
                <label><input className="uk-checkbox" type="checkbox" value="Food" onChange={handleTags}/> Comida</label>
                <label><input className="uk-checkbox" type="checkbox" value="VideoGames" onChange={handleTags}/> Videojuegos</label>
            </div>

            <div className="uk-margin">
                <div uk-form-custom="target: true"/*???*/>
                    <input type="file" name="imgDesign" onChange={uploadFile}/>
                    <input className="uk-input uk-form-width-medium" type="text" placeholder="Select file" disabled/>
                </div>
                {/*<button class="uk-button uk-button-default">Submit</button>*/}
            </div>

            <div className="uk-margin">
                <button className="uk-button uk-button-default uk-button-large uk-width-1-1" disabled={disableButton}>Cargar diseño</button>
            </div>
        </form>
    )
}

export default DesignForm