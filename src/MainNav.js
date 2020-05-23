import React from 'react';

function MainNav() {
    return (
        <nav className='main-nav'>
            <img className='company-logo' alt='iFit Coach logo'></img>
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