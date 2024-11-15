import React from 'react';
import './videoSuggestions.scss';

const VideoSuggestions = ({ videos, currentIndex, handleVideoSelected }) => {
  return (
    <div>
      <h2 className='videoSuggestions__bio--title'>NEXT VIDEOS</h2>
      <ul className='videoSuggestions__bio'>
        {videos.map((video, index) => (
          index !== currentIndex && (
            <li key={index} onClick={() => handleVideoSelected(index)}>
              <div>
              <img 
                src={video.image} 
                alt={video.title} 
                
                className='videoSuggestions__bio--cover'
              />
              </div>
              <div className='videoSuggestions__bio--info'>
                <p>{video.title}</p>
                <p>{video.channel}</p>
              </div>
            </li>
          )
        ))}
      </ul>
    </div>
  );
};

export default VideoSuggestions;