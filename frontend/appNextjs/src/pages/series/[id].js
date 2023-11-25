import PhotoList from 'components/Photo/PhotoList';
import axios from 'axios';

export const getStaticProps = async ({params}) => {
  const {id} = params

  const serie = await axios.get(`http://localhost:3001/series?id=${id}`);
  const photos = await axios.get(`http://localhost:3001/photos?serie=${serie.data[0].uriName}`);

  return {
    props: {
      serie : serie.data[0],
      photos : photos.data 
    }
  }
}


export async function getStaticPaths(){
  const {data : series} = await axios.get(`http://localhost:3001/series`);
  
  return {
    paths: series.map((s) => ({
      params: {
        id: s.id
      }
    })), 
    fallback: false,
  }
}

export default function seriePage({serie, photos}){
  return (
    <div>
      <h1>{serie.name}</h1>
      <PhotoList photos={photos}/>
    </div>
  )
}
