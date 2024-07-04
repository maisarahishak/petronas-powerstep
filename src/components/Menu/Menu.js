import React, { useState } from 'react';
import './Menu.css';
import logo from '../../assets/logo.png';

const Menu = () => {
  const [active, setActive] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    'Home', 'About', 'Challenge', 'Gallery', 'Hall of Fame', 'Contact', 'How To'
  ];

  return (
    <div className="menu-container">
      <img src={logo} alt="Logo" className="logo" />
      <nav className={`menu-items ${isMobileMenuOpen ? 'open' : ''}`}>
        {menuItems.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`menu-item ${active === item ? 'active' : ''}`}
            onClick={() => {
              setActive(item);
              setIsMobileMenuOpen(false); // Close menu on item click
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Menu;
