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
                <a key={1} href='#'>EXERCISE</a>
                <a key={2} href='#'>NUTRITION</a>
                <a key={3} href='#'>ACTIVITY</a>
                <a key={4} href='#'>SLEEP</a>
            </div>
            <button className='sign-up-button'>SIGN UP</button>
        </nav>
    );
}

export default MainNav;