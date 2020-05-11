import React from 'react';
import './style.css';

const Index =(props)=>{
    return(
        <div className="showcase">
            <div className="showcase-content">
                <img src={props.src}></img>
                <h3>{props.title}</h3>
                <p>{props.content}</p>
                <a className="button styled__button">{props.button}</a>
            </div>
        </div>
    )
}

export default Index;