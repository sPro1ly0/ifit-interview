/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Footer() {
    return (
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
    );
}

export default Footer;