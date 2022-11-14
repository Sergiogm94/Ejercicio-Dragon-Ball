import React from 'react';
import {Link} from "react-router-dom";
const Gallery = ({character}) => {
  return (
    <div>
      <div className="container">
            {character.map((item, index) => {
                return(
                    <div className="card" key={index}>
                <h3 className="name">{item.name}</h3>
                <img className="img" src={item.imageUrl} alt="imagen"></img>
                <button className="btn"><Link className="enlace"  to={`/characters/${item.name}`}> <h4>Más Info</h4></Link></button>
                </div>
                )
    
            })}
        </div>
    </div>
  )
}

export default Gallery
