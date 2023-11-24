import Image from 'next/image'

const  Photo= ({photo}) => {

    return (
        <div className='photo'>
            <h3>{photo.name}</h3>
            <img
            src={`http://localhost:3001/images/${photo.pathImage}`}
            />
            <h4>by {photo.author} </h4>
            <h4>{photo.price} $</h4>
        </div>
    )
}

export default Photo