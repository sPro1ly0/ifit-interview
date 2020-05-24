/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import testimonials from './testimonialdata';

class MediaSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            lastIndex: 3
        }
    }

    prevButton = () => {
        let index = this.state.currentIndex;

        if (index < 1) {
            index = testimonials.length;
        } else {
            --index;
        }

        this.setState({
            currentIndex: index
        });
    }

    nextButton = () => {
        let index = this.state.currentIndex;

        if (index === testimonials.length) {
            index = -1;
        } else {
            ++index;
        }

        this.setState({
            currentIndex: index
        });
    }

    render() {
        const { currentIndex } = this.state;

        const cards = testimonials.map( (t, i) => 
            <div key={t.id} className='media-testimonial'>
                <img 
                    src={require(`./images/${t.logo}`)} 
                    className='media-logo' 
                    alt={t.altText}
                />
                <p className='media-text'>{t.testmonial}</p>
            </div>
        );

        return ( 
            <div className='media-slider'>
                <button 
                    onClick={this.prevButton}
                    className='left-arrow-button'> 
                    &lt; 
                </button>
                {cards}
                <button
                    onClick={this.nextButton} 
                    className='right-arrow-button'>
                         &gt; 
                </button>
            </div>
        );
    }

}

export default MediaSlider;