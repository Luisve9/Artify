import React from 'react';
import "uikit/dist/css/uikit.min.css";
import "uikit/dist/css/uikit-core.min.css";
import "./styles/compStyles.css";
import ReactWaterMark from 'react-watermark-component';
import FileSaver, { saveAs } from 'file-saver';
import { sendEmailEndPoint } from '../services/user-ws';
import UIkit from 'uikit';

const CardDesign = (props) => {
    const {designData, handler, update, download} = props
    let card;
    let edit;
    let downloadButton;
    let image;
    let sendmail;

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

    const handleEmail = () => {
        const {email} = JSON.parse(localStorage.getItem("data"))

        sendEmailEndPoint({email: _creator.email, contactUser: email})
            .then(res => {
                UIkit.notification("Correo se envió con exito", {status:'success'})
            })
            .catch( err => {
                UIkit.notification("tuvimos un problema intente mas tarde", {status:'danger'})
            })
    }

    if(update) {
        edit = <label><input className="uk-checkbox" type="checkbox" value="Edit" onChange={handleClick}/>Editar</label>;
    }

    if(download) {
        sendmail = <a className="uk-button uk-button-default" onClick={handleEmail}> Contactar</a>
        downloadButton = <a className="uk-button uk-button-default" onClick={handleDownload}>Acceder imagen</a>
        image = 
            <div className="uk-card-media-top" uk-lightbox ="true">
                <a className="uk-inline" href={imgDesign}>
                    <img data-srcset={imgDesign} alt={title} uk-img="true"/>                
                </a>
            </div>
    } else {
        image =
            <div className="uk-card-media-top">
                <ReactWaterMark waterMarkText="Artify" options={{chunkWidth: 100, chunkHeight: 60, fillStyle: '#FFFFFF'}}>
                    <img data-srcset={imgDesign} alt={title} uk-img="true"/>
                </ReactWaterMark>
            </div>
    }

    if(Object.keys(designData).length > 0){
        card =
                <div className="uk-card uk-card-default uk-animation-scale-down">
                    {image}
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">{title}</h3>
                        <p>Tags: {tags}</p>
                        <p>Artista: {_creator.username}</p>
                        {edit}
                        {downloadButton}
                        {sendmail}
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