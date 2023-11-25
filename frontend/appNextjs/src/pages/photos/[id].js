import PhotoDetails from "components/Photo/PhotoDetails";
import axios from 'axios';



export const getStaticProps = async ({ params }) => {

    const {id} = params;

    const photo = await axios.get(`http://localhost:3001/photos/${id}`);
    
    return {
        props : {
          photo : photo.data
        }
    };
}

export async function getStaticPaths() {
  const {data : photos} = await axios.get(`http://localhost:3001/photos/`);

  return {
  paths: photos.map((p) => ({
    params: {
      id : p.id.toString()
    }
  })),
  fallback: false,
};
}

export default function photoPage({photo}) {

  return (
      <div>
          <PhotoDetails photo={photo}/>
      </div>
  );
}