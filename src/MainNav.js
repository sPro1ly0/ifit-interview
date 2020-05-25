/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function MainNav() {
    
    return (
        <nav className='main-nav'>
            <div className='logo-and-menu-burger'>
               <img 
                    src={require('./images/ifitcoachlogo.png')} 
                    className='ifitcoach-logo' 
                    alt='iFit Coach company logo' 
               />
                <div className="menu-burger">
                    <span className="menu-burger-btn"></span>
                </div> 
            </div>
            <div className='main-links'>
                <a href='#'>EXERCISE</a>
                <a href='#'>NUTRITION</a>
                <a href='#'>ACTIVITY</a>
                <a href='#'>SLEEP</a>
            </div>
            <button className='sign-up-button'>SIGN UP</button>
        </nav>
    );
}

export default MainNav;