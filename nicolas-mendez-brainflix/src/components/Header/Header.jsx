import React from 'react';
import './header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/Icons/Search.svg';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';


const Header = () => {
    return (
        <header className='searchBar__header'>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='searchBar__header--input'>
                <div>
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder={`Search`} />
                </div>
                <img className="profile-icon" src={userIcon} alt="profile picture" />
            </div>
            <div className='button__header'>
                <button>UPLOAD</button>
            </div>
        </header>
    );
};

export default Header;