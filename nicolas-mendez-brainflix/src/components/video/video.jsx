import React from 'react';
import './video.scss';

const Video = ({ currentVideo }) => {
    return (
        <video 
            src={currentVideo.video}  
            className='video__bio'
            style={{ border: "2px solid black" }} 
            controls 
            poster={currentVideo.image} // Add the poster attribute
        >
            Your browser does not support the video tag.
        </video>
    );
};

export default Video;