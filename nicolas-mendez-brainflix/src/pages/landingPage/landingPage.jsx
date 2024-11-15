import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Video from '../../components/video/video';
import Body from '../../components/Body/body';
import Comments from '../../components/Comments/Comments';
import VideoSuggestions from '../../components/VideoSuggestions/VideoSuggestions';
import {baseUrl, API_KEY} from "../../utils/utils";
import axios from 'axios';

const Landing = () => {

  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoCommentDetails, setVideoCommentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [videoSelected, handleVideoSelect] = useState(0);

  // const handleVideoSelect = (index) => {
  //   setCurrentIndex(index);
  //   if (index === 0) {
  //     navigate('/');
  //   } else {
  //     const selectedVideo = videos[index];
  //     navigate(`/videos/${selectedVideo.id}`);
  //   }
  // };

  useEffect(() => {
      const getVideoDetails = async (videoId) => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}videos/${videoId}?api_key=${API_KEY}`);
        setVideoDetails(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching video details:', error);
        return null;
      }
    };

    const fetchVideos = async () => {
      try {
        setLoading(true);
        // Make a GET request to the Discover endpoint
        const response = await axios.get(`${baseUrl}videos/?api_key=${API_KEY}`);
        setVideos(response.data);

        await getVideoDetails(response.data[videoSelected].id);
        setVideoCommentDetails(response.data[videoSelected].comments);
        if (videoSelected === 0) {
          navigate('/');
        } else {
          const selectedVideo = response.data[videoSelected];
          navigate(`/videos/${selectedVideo.id}`);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to fetch videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, [videoSelected, navigate]);


  //END

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (videos.length === 0) {
    return <div>No videos available</div>;
  }


  return (
    <div>
      <Video currentVideo={videoDetails} />
      <div className='bio__flex'>
        <div className='bio__flex--bodyComments'>
          <Body currentVideo={videoDetails} />
          <Comments currentVideo={videoDetails?.comments} />
        </div>
        <div>
          <VideoSuggestions 
            videos={videos} 
            currentIndex={videoSelected} 
            handleVideoSelected={handleVideoSelect} 
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;