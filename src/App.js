import React from 'react';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='top-product-nav'></nav>
        <nav className='main-nav'></nav>
      </header>
      <div className='hero'>
        <h1 className='hero-text'>The best personal training, right in your own home</h1>
        <button className='hero-button'>JOIN iFIT COACH</button>
      </div>
      <div className='media-slider'>
        <button className='left-arrow-button'> &lt; </button>
        <div className='media-testimonial'></div>
        <div className='media-testimonial'></div>
        <div className='media-testimonial'></div>
        <div className='media-testimonial'></div>
        <div className='media-testimonial'></div>
        <button className='right-arrow-button'> &gt; </button>
      </div>
      <div className='grid-library-cards'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='equipment-section'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <footer>
        <div className='website-links'>
          <div className='company-links'></div>
          <div className='account-links'></div>
          <div className='support-links'></div>
        </div>
        <div className='social-links'>
          
        </div>
        <div className='language-legal-info'>
          <select className='language-selector'>English</select>
          <div className='legal-info'>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
