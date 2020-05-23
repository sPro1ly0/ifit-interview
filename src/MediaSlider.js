/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function MediaSlider() {
    return (
        <div className='media-slider'>
            <button className='left-arrow-button'> &lt; </button>
            <div className='media-testimonial'>
            <img className='media-logo'/>
            <p className='media-text'>"You focus on putting in the work, and the technology handles the rest.”</p>
            </div>
            <div className='media-testimonial'>
            <img className='media-logo'/>
            <p className='media-text'>“Literally transports you from home to wherever you choose to run.”</p>
            </div>
            <div className='media-testimonial'>
            <img className='media-logo'/>
            <p className='media-text'>“Breathes new life into a tired, old running routine.”</p>
            </div>
            <div className='media-testimonial'>
            <img className='media-logo'/>
            <p className='media-text'></p>
            </div>
            <div className='media-testimonial'>
            <img className='media-logo'/>
            <p className='media-text'></p>
            </div>
            <button className='right-arrow-button'> &gt; </button>
        </div>
    );
}

export default MediaSlider;