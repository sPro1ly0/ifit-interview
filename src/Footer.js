/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import languages from './languages';

function Footer() {

    const languageOptions = languages.map((l, i) => 
        <option key={i}>{l}</option>
    );
    
    return (
        <footer>
            <div className='website-links'>
                <div key={1} className='company-section'>
                    <h2>Company</h2>
                    <div className='company-links'>
                        <a key={1}>About</a>
                        <a key={2}>Contact Us</a>
                        <a key={3}>Careers</a>
                    </div>
                </div>
                <div key={2} className='account-section'>
                    <h2>Account</h2>
                    <div className='account-links'>
                        <a key={1}>Log In</a>
                        <a key={2}>Create Account</a> 
                    </div>
                    
                </div>
                <div key={3} className='support-section'>
                    <h2>Support</h2>
                    <div className='support-links'>
                        <a key={1}>Help Center</a>
                        <a key={2}>Accessibility</a>
                    </div>
                </div>
            </div>
            <div className='social-links'>
                <a key={1} href='#'>
                    <div className='dark-background'>
                        <img src={require('./images/Social-youtube.png')} alt='YouTube link to iFit coach.' />
                    </div>
                    
                </a>
                <a key={2} href='#'>
                    <div className='dark-background'>
                        <img src={require('./images/Social--pinterest.png')} alt='Pinterest link to iFit coach.' /> 
                    </div>
                </a>
                <a key={3} href='#'>
                    <div className='dark-background'>
                        <img src={require('./images/Social--facebook.png')} alt='Facebook link to iFit coach.' />
                    </div>
                </a>
                <a key={4} href='#'>
                    <div className='dark-background'>
                        <img src={require('./images/Social--twitter.png')} alt='Twitter link to iFit coach.' />
                    </div> 
                </a>
                <a key={5} href='#'>
                    <div className='dark-background'>
                        <img src={require('./images/Social--instagram.png')} alt='Instagram link to iFit coach.' />
                    </div>
                </a>
            </div>
            <div className='language-legal-info'>
                <div className='language-selector'>
                    <select>
                        {languageOptions}
                    </select>
                </div>
                <div className='legal-info'>
                    <p>© iFit.com. All Rights Reserved.</p>
                    <div className='legal-links'>
                        <a key={1} href='#'>Privacy Policy</a>
                        <a key={2} href='#'>Terms of Use</a> 
                    </div> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;