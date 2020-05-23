/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='top-product-nav'>
          <a>BLOG</a>
          <a>NOURISH</a>
          <a>SHOP</a>
        </nav>
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
      </header>
      <div className='hero'>
        <h1 className='hero-text'>The best personal training, right in your own home</h1>
        <button className='hero-button'>JOIN iFIT COACH</button>
      </div>
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
      <div className='equipment-section'>
        <h1 className='equipment-section-title'>Interested in our exciting iFit-enabled equipment?</h1>
        <div className='equipment-card'>
          <img />
          <h2 className='equipment-title'>Treadmills</h2>
        </div>
        <div className='equipment-card'>
          <img />
          <h2 className='equipment-title'>Bikes</h2>
        </div>
        <div className='equipment-card'>
          <img />
          <h2 className='equipment-title'>Ellipticals</h2>
        </div>
        <div className='equipment-card'>
          <img />
          <h2 className='equipment-title'>Strength</h2>
        </div>
      </div>
      <footer>
        <div className='website-links'>
          <div className='company-links'>
            <h2>Company</h2>
            <a>About</a>
            <a>Contact Us</a>
            <a>Careers</a>
          </div>
          <div className='account-links'>
            <h2>Account</h2>
            <a>Log In</a>
            <a>Create Account</a>
          </div>
          <div className='support-links'>
            <h2>Support</h2>
            <a>Help Center</a>
            <a>Accessibility</a>
          </div>
        </div>
        <div className='social-links'>
          
        </div>
        <div className='language-legal-info'>
          <select className='language-selector'>English</select>
          <div className='legal-info'>
            <p>© iFit.com. All Rights Reserved.</p>
            <a>Privacy Policy</a>
            <a>Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
