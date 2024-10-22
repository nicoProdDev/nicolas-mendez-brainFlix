import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Data from './data/video-details.json';
import Landing from "./pages/landingPage/landingPage";
import './App.scss';
import VideoUpload from './pages/videoUpload/videoUpload';

const API_KEY = "3e94b6fc-972a-4c14-94de-35a79778d26e";
const API_BASE_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com/';

function App() {  
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [movies, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {

  const fetchVideos = async () => {
    try {
      setLoading(true);
      // Make a GET request to the Discover endpoint
      const response = await axios.get(`${`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`}`, {
        params: {
          api_key: API_KEY
        }
      });
      setVideos(response.data);
      setLoading(false);

      console.log('Fetched movies:', response.data);

    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('Failed to fetch movies. Please try again later.');
      setLoading(false);
    }
  };

  fetchVideos();
  }, []
);



  

  const handleVideoSelect = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      navigate('/');
    } else {
      const selectedVideo = Data[index];
      navigate(`/videos/${selectedVideo.id}`);
    }
  };

  const currentVideo = Data[currentIndex];

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={
          <Landing 
            currentVideo={currentVideo} 
            currentIndex={currentIndex} 
            handleVideoSelect={handleVideoSelect} 
          />
        } />
        <Route path="/videos/:id" element={
          <Landing 
            currentVideo={currentVideo} 
            currentIndex={currentIndex} 
            handleVideoSelect={handleVideoSelect} 
          />
        } />
        <Route  path='/upload'
                element={<VideoUpload />} 
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