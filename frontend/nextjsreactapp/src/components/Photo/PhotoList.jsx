import Link from "next/link";

import Photo from "components/Photo/Photo";

const PhotoList = ({photos}) => {
    if(!photos) return null

    return (
        <div>
          <div className="photos">
          {photos.map((photo) => (
            <div key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                  <Photo photo={photo}/>              
              </Link>
            </div>
          ))}
          </div>
        </div>
    )
}

export default PhotoList;