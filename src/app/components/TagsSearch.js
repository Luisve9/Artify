import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import './styles/compStyles.css';
import React, {useState} from 'react';

const TagsSearch = ({handler}) => {

    const [selectedTags, setTags] = useState([])

    const handleTags = (e) => {
        let array = selectedTags
        if(array.includes(e.target.value)){
            array.splice(array.indexOf(e.target.value), 1)
        } else {
            array.push(e.target.value)
        }
        setTags(array)
        handler(selectedTags)
    }

    return(
            <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                <label><input className="uk-checkbox" type="checkbox" value="Abstract" onChange={handleTags}/> Abstract</label>
                <label><input className="uk-checkbox" type="checkbox" value="Nature" onChange={handleTags}/> Nature</label>
                <label><input className="uk-checkbox" type="checkbox" value="Art" onChange={handleTags}/> Art</label>
                <label><input className="uk-checkbox" type="checkbox" value="Textures" onChange={handleTags}/> Textures</label>
                <label><input className="uk-checkbox" type="checkbox" value="Fashion" onChange={handleTags}/> Fashion</label>
                <label><input className="uk-checkbox" type="checkbox" value="Landscape" onChange={handleTags}/> Landscape</label>
                <label><input className="uk-checkbox" type="checkbox" value="Photograph" onChange={handleTags}/> Photograph</label>
                <label><input className="uk-checkbox" type="checkbox" value="Digital design" onChange={handleTags}/> Digital design</label>
                <label><input className="uk-checkbox" type="checkbox" value="Food" onChange={handleTags}/> Food</label>
                <label><input className="uk-checkbox" type="checkbox" value="VideoGames" onChange={handleTags}/> VideoGames</label>
            </div>
    )
}

export default TagsSearch