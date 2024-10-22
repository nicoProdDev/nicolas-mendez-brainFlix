import { useState, useEffect } from 'react';
import axios from 'axios';

const UseVideos = () => {
  // Store the API key here
  const apiKey = "3e94b6fc-972a-4c14-94de-35a79778d26e"; // Replace with your actual API key

  // State to store the fetched videos
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`
        );
        setVideos(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [apiKey]);

  // Return the fetched videos, loading, and error states
  return { videos, loading, error };
};

export default UseVideos;