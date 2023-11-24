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

export default function PhotoPage({ photos }) {
    return (
        <div>
            <Link href="/">Home</Link>
            <h1>photos</h1>
            <PhotoList photos={ photos } />
        </div>
    );
}