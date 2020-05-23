/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function MainNav() {
    return (
        <nav className='main-nav'>
            <img src={require('./images/ifitcoachlogo.png')} className='ifitcoach-logo' alt='iFit Coach logo'></img>
            <div>
                <a>EXERCISE</a>
                <a>NUTRITION</a>
                <a>ACTIVITY</a>
                <a>SLEEP</a>
            </div>
            <button className='sign-up-button'>SIGN UP</button>
        </nav>
    );
}

export default MainNav;