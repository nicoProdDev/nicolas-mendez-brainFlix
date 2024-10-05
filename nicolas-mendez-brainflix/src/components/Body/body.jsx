import React from 'react';
import './body.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

const Body = ({ currentVideo }) => {

  function unixToReadable(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  } 

  return (
    <div className='body__bio'>
      <div className='body__bio--title'>
            <h1>{currentVideo.title}</h1>
      </div>
      <div className='body__bio--metadata'>
            <div>
                <p>{`By ${currentVideo.channel}`}</p>
                <p>{unixToReadable(currentVideo.timestamp)}</p>
            </div>
            <div className='body__bio--metadata--Numeric'>
                <div className='body__bio--metadata--Numeric--user'>
                    <img src={viewsIcon} alt="views Icon" className='body__bio--metadata--Numeric--icon'/>
                    <p>{currentVideo.views}</p>
                </div>
                <div>
                    <img src={likesIcon} alt="likes Icon" className='body__bio--metadata--Numeric--icon'/>
                    <p>{currentVideo.likes}</p>
                </div>
            </div>
      </div>
      <p className='body__bio--description'>{currentVideo.description}</p>
    </div>
  );
};

export default Body;