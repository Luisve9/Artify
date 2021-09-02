import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";

const CardDesign = (props) => {
    const {designData, handler, update} = props
    let card;
    let edit;
    const {imgDesign, title, _creator, tags} = designData

    const handleClick = () => {
        handler(designData)
    } 

    if(update) {
        edit = <label><input className="uk-checkbox" type="checkbox" value="Edit" onChange={handleClick}/>Edit</label>;
    }

    if(Object.keys(designData).length > 0){
        card =
            <div className="uk-child-width-1-2@m" uk-grid="true">
                <div className="uk-card uk-card-default">
                    <div className="uk-card-media-top">
                        <img data-srcset={imgDesign} alt={title} uk-img="true"/>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{title}</h3>
                        <p>Tags: {tags}</p>
                        <p>Artist: {_creator.username}</p>
                        {edit}
                    </div>
                </div>
            </div>
    }

    return(
        <div>
            {card}
        </div>    
    )
}

export default CardDesign