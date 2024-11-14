import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Video from '../../components/video/video';
import Body from '../../components/Body/body';
import Comments from '../../components/Comments/Comments';
import VideoSuggestions from '../../components/VideoSuggestions/VideoSuggestions';
import Data from '../../data/video-details.json'; // Adjust the import path as necessary
import {baseUrl, API_KEY} from "../../utils/utils";
import axios from 'axios';

const Landing = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState([]);
  const [videoCommentDetails, setVideoCommentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [videoSelected, handleVideoSelect]

  const handleVideoSelect = (index) => {
    setCurrentIndex(index);
    if (index === 0) {
      navigate('/');
    } else {
      const selectedVideo = videos[index];
      navigate(`/videos/${selectedVideo.id}`);
    }
  };

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
        const response = await axios.get(`${baseUrl}videos/?api_key=${API_KEY}}`);
        setVideos(response.data);

        getVideoDetails(response.data[0].id)
        setVideoCommentDetails(response.data[0].id.comments)

        setLoading(false);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Failed to fetch videos. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const commentDetails = videoDetails.comments;

  console.log(commentDetails);





  // const currentVideo = videos[currentIndex] || videos[0];





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
            videos={Data} 
            currentIndex={currentIndex} 
            handleVideoSelect={handleVideoSelect} 
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;