import Link from 'next/link';
import axios from 'axios'
import PhotoList from "components/Photo/PhotoList";

export const getServerSideProps = async () => {
  const result = await axios.get("http://localhost:3001/photos")
  return {
    props: {
      photos : result.data
    },
  };
};

const IndexPage = ({photos}) =>{
  return(
    <div>
      <PhotoList photos={photos}/>
    </div>
  )
};

export default IndexPage;