import {React, useState, useEffect} from 'react';
import NavBar from '../NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home/Home';
import './App.css'
import PhotoPage from '../PhotoPage/PhotoPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import photoService from '../../services/photo';
import PhotoList from '../Photo/PhotoList';

const App = () => {

  const [photos, setPhotos] = useState([]);
  const hook = () => {
     photoService
     .getPhotos()
     .then(initialPhotos => {
       setPhotos(initialPhotos);
     });
  }
  useEffect(hook, []);
  return(
    <Router>
      <div>
        <NavBar series={[...new Set(photos.map(photo => photo.serie))]}/>
      </div>
      <Routes>
        <Route path="/photo/:id" element={<PhotoPage photos={photos}/>} /> 
        <Route path="/" element={<Home photos={photos}/>} />
        <Route path="/filtered/:serie" element={<PhotoList photos={photos}/>} />
      </Routes>
    </Router>
  )
} 

export default App;
