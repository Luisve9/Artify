import React, {useState, useEffect} from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "./styles/compStyles.css";
import { BrowserRouter, Link } from 'react-router-dom';
import ReactWaterMark from 'react-watermark-component';
import FileSaver, { saveAs } from 'file-saver';

const CardDesign = (props) => {
    const {designData, handler, update, download} = props
    let card;
    let edit;
    let downloadButton;

    const {imgDesign, title, _creator, tags} = designData

    const handleClick = () => {
        handler(designData)
    } 
    const handleDownload = () => {
        let extension;
        if(imgDesign.substr(-4, 1) === ".") {
            extension = imgDesign.substr(-3)
        } else {
            extension = imgDesign.substr(-4)
        }

        FileSaver.saveAs(imgDesign, `${title}.${extension}`)
    }

    if(update) {
        edit = <label><input className="uk-checkbox" type="checkbox" value="Edit" onChange={handleClick}/>Edit</label>;
    }

    if(download) {
        downloadButton = <a className="uk-button uk-button-default" onClick={handleDownload}>Access image</a>
    }

    if(Object.keys(designData).length > 0){
        card =
                <div className="uk-card uk-card-default uk-animation-scale-down">
                    <div className="uk-card-media-top" uk-lightbox ="true">
                        <a className="uk-inline" href={imgDesign}>
                            <img data-srcset={imgDesign} alt={title} uk-img="true"/>
                        </a>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{title}</h3>
                        <p>Tags: {tags}</p>
                        <p>Artist: {_creator.username}</p>
                        {edit}
                        {downloadButton}
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