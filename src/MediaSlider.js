/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import testimonials from './testimonialdata';

class MediaSlider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: testimonials
        }
    }
    // change order of the testimonials in array
    prevButton = () => {
        let currentTests = this.state.data;
        let prevTest = currentTests.pop();
        this.setState({
            data: [prevTest, ...currentTests]
        });
    }

    nextButton = () => {
        let currentTests = this.state.data;
        let nextTest = currentTests.shift();
        this.setState({
            data: [...currentTests, nextTest]
        });
    }

    render() {
        const { data } = this.state;

        let currentCards = data.slice(0, 5); // display 5 at a time
        
        const cards = currentCards.map(d => 
            <div key={d.id} className='media-testimonial'>
                <img 
                    src={require(`./images/${d.logo}`)} 
                    className='media-logo' 
                    alt={d.altText}
                />
                <p className='media-text'>{d.testmonial}</p>
            </div>
        );

        return ( 
            <div className='media-slider'>
                <button 
                    onClick={this.prevButton}
                    className='left-arrow-button'> 
                    &lt; 
                </button>
                <div className='media-content'>
                    {cards}
                </div>
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