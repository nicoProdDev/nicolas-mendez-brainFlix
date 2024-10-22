import React from 'react';
import './videoUpload.scss';
import uploadVideoPreview from '../../assets/Images/Upload-video-preview.jpg';
import uploadIcon from '../../assets/Icons/upload.svg';

const VideoUpload = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const description = event.target.description.value;

        if (title && description) {
            // Redirect to home directory
            window.location.href = '/';
            alert('Video uploaded successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    };

    const handleCancel = () => {
        document.getElementById('video-upload-form').reset();
    };

    return (
        <div className='uploadVideo__header--padding'>
            <h1 className='uploadVideo__header'>Upload Video</h1>

            <form id="video-upload-form" onSubmit={handleSubmit}>
                <div className='uploadVideo__textForm'>
                    <div className='uploadVideo__textForm--img'>
                        <h3>VIDEO THUMBNAIL</h3>
                        <img src={uploadVideoPreview} alt="video upload cover" />
                    </div>
                    <div className='uploadVideo__textForm--form'>
                        <h3>TITLE YOUR VIDEO</h3>
                        <input type="text" name="title" placeholder="Add a title to your video" className='uploadVideo__input--title'/>
                        <h3>ADD A VIDEO DESCRIPTION</h3>
                        <input name="description" placeholder="Add a description to your video" className='uploadVideo__input--description' />
                    </div>
                </div>
               <div className='uploadVideo__button'>
                    <div className='button__blue'>
                        <img src={uploadIcon} onClick={handleSubmit} alt="upload icon"/>
                        <button>PUBLISH</button>
                    </div>
                    <div>
                        <img src={uploadIcon} alt="upload icon"/>
                        <button type="button" onClick={handleCancel} className='uploadVideo__buttonCancel'>CANCEL</button>
                    </div>
               </div>
            </form>
        </div>
    );
}

export default VideoUpload;