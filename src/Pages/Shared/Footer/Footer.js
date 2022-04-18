import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <footer className='text-center text-lg-start'>
      <div className='footer'>
        <div className='logo-footer-section'>
          
          <div className='footer-description'>
            {/* firs one footer description */}
            <ul>
              <li>
                <Link to=''>My Email: applerb326@gmail.com</Link>
              </li>
              <li>
                <Link to=''>Phone: 0199999999</Link>
              </li>
              <li>
                <Link to=''>Address: China</Link>
              </li>
              <li>
                <Link to=''>See my Service</Link>
              </li>
            </ul>
            {/* second one foote descrioption */}
            <ul>
              <li>
                <Link to=''>Read Photo Service</Link>
              </li>
              <li>
                <Link to=''>See PopularShoots</Link>
              </li>
              <li>
                <Link to=''>See My Blogs</Link>
              </li>
              <li>
                <Link to=''>See my About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='copy-right-div'>
          <div>
            <p className='text-secondary'>
              <span>Copyright</span> &copy; {year} Wild PhotoGrapher
            </p>
          </div>
          <div className='footer-link'>
            <Link to=''>Privacy Policy.</Link>
            <Link to=''>Terms od Use.</Link>
            <Link to=''>Pricing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;