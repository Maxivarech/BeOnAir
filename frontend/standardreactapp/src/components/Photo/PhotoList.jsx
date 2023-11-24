import React from 'react';
import {Link, useParams} from 'react-router-dom';

const PhotoList = ({ photos }) => {

  const serie = useParams().serie;
  if(serie){
    photos = photos.filter(p => p.serie === serie);
  }
  return(
    <div>
      <div className="photos">
        {photos.map((photo)=>(
        <Link to={`/photo/${photo.id}`}>
          <div className="photo">
          <h3>{photo.name}</h3>
          <img src={`http://localhost:3001/images/${photo.pathImage}`} alt={photo.name}/> 
          
          <h4>by {photo.author} </h4>
          
          <h4>{photo.price} $</h4>
          </div>
        </Link>
          ))}
      </div>
    </div>
  )
};
  

export default PhotoList;