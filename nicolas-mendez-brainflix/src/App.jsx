import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Landing from "./pages/landingPage/landingPage";
import './App.scss';
import VideoUpload from './pages/videoUpload/videoUpload';
const API_KEY = "3e94b6fc-972a-4c14-94de-35a79778d26e";

function App() {  
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        // Make a GET request to the Discover endpoint
        const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${API_KEY}`, 
          {});
        setVideos(response.data);
        setLoading(false);

        const videosAPI = response.data;

      // console.log('Fetched videos:', response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to fetch videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (videos.length === 0) {
    return <div>No videos available</div>;
  }

  const currentVideo = videos[currentIndex] || videos[0];

  const handleVideoSelect = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      navigate('/');
    } else {
      const selectedVideo = videos[index];
      navigate(`/videos/${selectedVideo.id}`);
    }
  };

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
        <Route path='/upload'
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