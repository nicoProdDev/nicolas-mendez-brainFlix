import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import searchIcon from '../../assets/Icons/Search.svg';
import userIcon from '../../assets/Images/Mohan-muruge.jpg';
import uploadIcon from '../../assets/Icons/upload.svg'


const Header = () => {
    return (
        <header className='searchBar__header'>
            <div>
            <NavLink to="/"><img src={logo} alt="logo" className='searchBar__header--logo'/></NavLink>
            </div>
            <div className='searchBar__header--input'>
                <div>
                    <img src={searchIcon} alt="" />
                    <input type="text" placeholder={`Search`} />
                </div>
                <img className="profile-icon-header" src={userIcon} alt="profile picture" />
            </div>

            <NavLink to="/upload" className='navLink__button'>
                <div className='button__blue--parent'>
                    <div className='button__blue'>
                        <img src={uploadIcon} alt="upload icon" />
                        <button>UPLOAD</button>
                    </div>

                    <img className="profile-icon-header--wide" src={userIcon} alt="profile picture" />

                </div>
            </NavLink>

            

        </header>
    );
};

export default Header;