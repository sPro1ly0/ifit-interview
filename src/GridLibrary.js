/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function GridLibrary() {
    return (
        <div className='grid-library-cards'>
            <div className='grid-card'>
            <div>
                <img className='grid-picture'/>
                <div>Some cards have # of workouts on hover?</div>
            </div>
            <div>
                <div>
                <h1 className='card-title'></h1>
                <h2 className='card-stats'></h2>
                </div>
                <img className='avatar-icon'/>
            </div>
            
            <a>VIEW DETAILS(on hover?)</a>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default GridLibrary;