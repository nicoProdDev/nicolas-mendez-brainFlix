import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from "./pages/landingPage/landingPage";
import './App.scss';
import {baseUrl, API_KEY} from "./utils/utils";
import VideoUpload from './pages/videoUpload/videoUpload';




function App() {

  const [nextVideos, setNextVideos] = useState([])

  useEffect(() => {
    const fetchNextVideos = async () => {
        const response = await axios.get(`${baseUrl}videos?api_key=${API_KEY}`)
        if (response.data) {
            setNextVideos(response.data)
        } else {
            console.error("No data received from fetch")
        }
    };
    fetchNextVideos();
}, []);  

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <Landing  
          />
        } />
        <Route path="/videos/:id" element={
          <Landing 
          />
        } />
        <Route path='/upload'
                element={<VideoUpload reRender={setNextVideos}/>} 
        />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}