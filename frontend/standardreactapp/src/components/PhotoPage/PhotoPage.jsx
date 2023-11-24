import React from "react";
import { useParams,Link } from 'react-router-dom';
import Back from '../Img/back.jpg';

const PhotoPage = ({ photos }) => {
    const id = useParams().id;
    const photo = photos.find(p => p.id === Number(id));

    return(
        <div className='d-flex flex-row ' style={{height: '100vh'}}>
            <div className="p-2">
                {<img src={`http://localhost:3001/images/${photo.pathImage}`} alt="" style={{height:'100vh'}} />}
            </div>
            <div className="d-flex flex-column p-3 bg-black align-items-center justify-content-center" style={{width:'100%'}}>
                <div className="p-2">
                    <h1 className='text-light'>by {photo.author}</h1>
                </div>
                <br />
                <div className="p-2">
                    <h3 className='text-light'>{photo.name}</h3>
                </div>
                <br />
                <div className="p-2">
                    <h4 className='text-light'>{photo.price}$</h4>
                </div>
                <br />
                <div className="p-2">
                    <p className='text-light'>{photo.serie}</p>
                </div>
                <br />
                <div className="p-2">
                <Link to={`/`} >        {<img src={Back} alt="" style={{height:'10vh'}} />}   </Link>
                </div>
            </div>
        </div>
    )
}

export default PhotoPage;