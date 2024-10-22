import React from 'react';
import Video from '../../components/video/video';
import Body from '../../components/Body/body';
import Comments from '../../components/Comments/Comments';
import VideoSuggestions from '../../components/VideoSuggestions/VideoSuggestions';
import Data from '../../data/video-details.json'; // Adjust the import path as necessary


const Landing = ({ currentVideo, currentIndex, handleVideoSelect }) => {
  return (
    <div>
      <Video currentVideo={currentVideo} />
      <div className='bio__flex'>
        <div className='bio__flex--bodyComments'>
          <Body currentVideo={currentVideo} />
          <Comments currentVideo={currentVideo} />
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