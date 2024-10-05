import React from 'react';
import './video.scss';

const Video = ({ currentVideo }) => {
    return (
        <div className='video__bio--parent'>
            <video 
                src={currentVideo.video}  
                className='video__bio'
                controls 
                poster={currentVideo.image} 
                >
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Video;