import React, { useEffect } from 'react';
import '../styles/Holidays.css';
import { getHolidayTheme } from '../Utils/holidayUtilis';

import christmasBg from '../images/snow.jpg';


const HolidayTheme = ({ children }) => {
  const theme = getHolidayTheme();

  // Define holiday-specific colors
  useEffect(() => {
    const root = document.documentElement;

    if (theme === 'christmas') {
      root.style.setProperty('--primary-color', 'red'); // Red
      root.style.setProperty('--secondary-color', 'green'); // Green
      root.style.setProperty('--accent-color', 'red'); // Gold
      root.style.setProperty('--neutral-color', 'white'); // White
    } else if (theme === 'easter') {
      root.style.setProperty('--primary-color', '#FFB6C1'); // Pink
      root.style.setProperty('--secondary-color', '#8ED2C9'); // Pastel Teal
      root.style.setProperty('--accent-color', '#E6E6FA'); // Light Yellow
      root.style.setProperty('--neutral-color', '#FFFFFF'); // White
    } else if (theme === 'halloween') {
      root.style.setProperty('--primary-color', '#FF8C00'); // Orange
      root.style.setProperty('--secondary-color', '#800080'); // Black
      root.style.setProperty('--accent-color', '#000000'); // Purple
      root.style.setProperty('--neutral-color', '#F5F5F5'); // Off-white
    } else if (theme === 'thanksgiving') {
      root.style.setProperty('--primary-color', '#D2691E'); // Brown
      root.style.setProperty('--secondary-color', '#FF6347'); // Tomato Red
      root.style.setProperty('--accent-color', '#FFD700'); // Gold
      root.style.setProperty('--neutral-color', '#FFF5E6'); // Warm Cream
    } else if (theme === 'valentines') {
      root.style.setProperty('--primary-color', '#FF69B4'); // Hot Pink
      root.style.setProperty('--secondary-color', '#DB7093'); // Deep Pink
      root.style.setProperty('--accent-color', '#FFB6C1'); // Light Pink
      root.style.setProperty('--neutral-color', '#FFFFFF'); // White
    } else if (theme === 'newYear') {
      root.style.setProperty('--primary-color', '#191970'); // Gold
      root.style.setProperty('--secondary-color', '#FFD700'); // Black
      root.style.setProperty('--accent-color', '#B0C4DE'); // Light Steel Blue
      root.style.setProperty('--neutral-color', '#FFFFFF'); // White
    } 
    else if (theme === 'julyFourth') {
      root.style.setProperty('--primary-color', '#FF0000'); // Red
      root.style.setProperty('--secondary-color', '#0000FF'); // Blue
      root.style.setProperty('--accent-color', '#FFFFFF'); // White
      root.style.setProperty('--neutral-color', '#F5F5F5'); // Off-white
    }else {
      // Reset to default colors
      root.style.setProperty('--primary-color', '#63dbf0');
      root.style.setProperty('--secondary-color', '#a7bfff');
      root.style.setProperty('--accent-color', '#e63b96');
      root.style.setProperty('--neutral-color', '#f8f9fa');
    }
  }, [theme]);

  // Define background styles for each holiday
  const backgroundStyles = {
    christmas: { backgroundImage: `url(${christmasBg})` },
    default: { backgroundColor: 'white' },
  };

  return (
    <div
      className={`website-container ${theme}`}
      style={backgroundStyles[theme] || backgroundStyles.default}
    >
      {/* Holiday banners */}
      {theme === 'christmas' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#FF0000', color: 'white' }} // Red background and green text
        >
          Merry Christmas! 🎄
        </div>
      )}
      {theme === 'easter' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#FFB6C1', color: 'yellow' }} // Pink background and pastel teal text
        >
          Happy Easter! 🐰
        </div>
      )}
      {theme === 'halloween' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#000000', color: '#FF8C00' }} // Orange background and black text
        >
          Boo! Happy Halloween! 🎃
        </div>
      )}
      {theme === 'thanksgiving' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#D2691E', color: '#FFD700' }} // Brown background and golden text
        >
          Happy Thanksgiving! 🦃
        </div>
      )}
      {theme === 'valentines' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#FF69B4', color: '#FFFFFF' }} // Hot pink background and white text
        >
          Happy Valentine's Day! ❤️
        </div>
      )}
      {theme === 'newYear' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#F7E7CE', color: '#000000' }} // Gold background and black text
        >
          Happy New Year! 🎉
        </div>
      )}
      {theme === 'julyFourth' && (
        <div
          className="holiday-banner"
          style={{ backgroundColor: '#FF0000', color: '#FFFFFF' }} // Red background and white text
        >
          Happy Fourth of July! 🎆
        </div>
      )}
      {/* Website content */}
      {children}
    </div>
  );
};

export default HolidayTheme;




