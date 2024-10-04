import React from 'react';
import './videoSuggestions.scss';

const VideoSuggestions = ({ videos, currentIndex, handleVideoSelect }) => {
  return (
    <div>
      <h2>Next Videos</h2>
      <ul>
        {videos.map((video, index) => (
          index !== currentIndex && (
            <li key={index} onClick={() => handleVideoSelect(index)}>
              <div>
              <img src={video.image} alt={video.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
              </div>
              <div>
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