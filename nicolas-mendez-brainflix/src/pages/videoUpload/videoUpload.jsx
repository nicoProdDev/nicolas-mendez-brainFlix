import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import uploadVideoPreview from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/upload.svg';
import './videoUpload.scss';

const VideoUpload = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    const title = formData.get('title');
    const description = formData.get('description');

    if (!title || !description) {
      alert('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    const videoData = {
      title,
      description,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await axios.post('http://localhost:5000/videos', videoData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data && response.data.id) {
        alert('Video uploaded successfully!');
        navigate(`/video/${response.data.id}`);
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      console.error('Error posting data:', error);
      alert(`Failed to upload video: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    const form = document.getElementById('video-upload-form');
    if (form) {
      form.reset();
    }
  };

  return (
    <div className="uploadVideo__header--padding">
      <h1 className="uploadVideo__header">Upload Video</h1>
      <form id="video-upload-form" onSubmit={handleSubmit}>
        <div className="uploadVideo__textForm">
          <div className="uploadVideo__textForm--img">
            <h3>VIDEO THUMBNAIL</h3>
            <img src={uploadVideoPreview} alt="video upload cover" />
          </div>
          <div className="uploadVideo__textForm--form">
            <h3>TITLE YOUR VIDEO</h3>
            <input
              type="text"
              name="title"
              placeholder="Add a title to your video"
              className="uploadVideo__input--title"
              required
            />
            <h3>ADD A VIDEO DESCRIPTION</h3>
            <textarea
              name="description"
              placeholder="Add a description to your video"
              className="uploadVideo__input--description"
              required
            />
          </div>
        </div>
        <div className="uploadVideo__button">
          <button 
            type="submit" 
            className="button__blue"
            disabled={isLoading}
          >
            <img src={uploadIcon} alt="upload icon" />
            {isLoading ? 'PUBLISHING...' : 'PUBLISH'}
          </button>
          <button 
            type="button" 
            onClick={handleCancel}
            className="uploadVideo__buttonCancel"
            disabled={isLoading}
          >
            <img src={uploadIcon} alt="upload icon" />
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default VideoUpload;