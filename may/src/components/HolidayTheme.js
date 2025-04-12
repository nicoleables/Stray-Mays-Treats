import React from 'react';
import '../styles/Holidays.css';
import { getHolidayTheme } from '../Utils/holidayUtilis';

// Import images
import christmasBg from '../images/dogchristmas.jpeg';
import easterBg from '../images/dogchristmas.jpeg';
import halloweenBg from '../images/dogchristmas.jpeg';
import thanksgivingBg from '../images/dogchristmas.jpeg';
import valentinesBg from '../images/dogchristmas.jpeg';
import newYearBg from '../images/dogchristmas.jpeg';

const HolidayTheme = ({ children }) => {
  const theme = getHolidayTheme();

  const backgroundStyles = {
    christmas: { backgroundImage: `url(${christmasBg})` },
    easter: { backgroundImage: `url(${easterBg})` },
    halloween: { backgroundImage: `url(${halloweenBg})` },
    thanksgiving: { backgroundImage: `url(${thanksgivingBg})` },
    valentines: { backgroundImage: `url(${valentinesBg})` },
    newYear: { backgroundImage: `url(${newYearBg})` },
    default: { backgroundColor: 'white' }
  };

  return (
    <div
      className={`website-container ${theme}`}
      style={backgroundStyles[theme] || backgroundStyles.default}
    >
      {/* Holiday banners */}
      {theme === 'christmas' && <div className="holiday-banner">Merry Christmas! 🎄</div>}
      {theme === 'easter' && <div className="holiday-banner">Happy Easter! 🐰</div>}
      {theme === 'halloween' && <div className="holiday-banner">Boo! Happy Halloween! 🎃</div>}
      {theme === 'thanksgiving' && <div className="holiday-banner">Happy Thanksgiving! 🦃</div>}
      {theme === 'valentines' && <div className="holiday-banner">Happy Valentine's Day! ❤️</div>}
      {theme === 'newYear' && <div className="holiday-banner">Happy New Year! 🎉</div>}

      {/* Website content */}
      {children}
    </div>
  );
};

export default HolidayTheme;


