import React from 'react';
import './comments.scss';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';
import commentIcon from '../../assets/Icons/add_comment.svg'



const Comments = ({ currentVideo }) => {
    return (
        <div className='commentsSection__bio'>
            <div>
                <p>{`${currentVideo.comments.length} comments`}</p>
            </div>
            <div className='commentsSection__bio--flex'>
                <div>
                    <img src={userIcon} alt="User Icon" className='profile-icon__comments'/>
                </div>
                <div className='commentsSection__bio--flexInput'>
                    <h3>JOIN THE CONVERSATION</h3>
                    <input type="text" placeholder="Add a comment" className='commentsSection__bio--input'/>
                    <div className='button__blue'>
                        <img src={commentIcon} alt="" />
                        <button>COMMENT</button>
                    </div>
                </div>
            </div>
            <div>
                {currentVideo.comments.map((comment, index) => (
                    <div key={index}>
                        <div>
                            <img src="" alt="User Icon"/>
                        </div>
                        <div>
                            <h4>{comment.name}</h4>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;