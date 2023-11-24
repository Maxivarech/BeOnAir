import PhototList from "../Photo/PhotoList";

const Home = ({ photos }) => {
  return(
    <div>     
      <PhototList photos={photos}></PhototList>
    </div>
  )
}
  export default Home;
  