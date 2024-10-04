import React from 'react';
import './body.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

const Body = ({ currentVideo }) => {
  return (
    <div className='body__bio'>
      <div className='body__bio--title'>
            <h1>{currentVideo.title}</h1>
      </div>
      <div className='body__bio--metadata'>
            <div>
                <p>{`By ${currentVideo.channel}`}</p>
                <p>{currentVideo.timestamp}</p>
            </div>
            <div className='body__bio--metadata--Numeric'>
                <div>
                    <img src={viewsIcon} alt="views Icon"/>
                    <p>{currentVideo.views}</p>
                </div>
                <div>
                    <img src={likesIcon} alt="likes Icon"/>
                    <p>{currentVideo.likes}</p>
                </div>
            </div>
      </div>
      <p className='body__bio--description'>{currentVideo.description}</p>
    </div>
  );
};

export default Body;