import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-4 mt-5">
      <div className="container d-flex justify-content-between">
        <p>&copy; 2025 Stray Mays Treats. All rights reserved.</p>
        <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



