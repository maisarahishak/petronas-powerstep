import React, { useState } from 'react';
import './Menu.css';
import logo from '../../assets/logo.png';

const Menu = () => {
  const [active, setActive] = useState('Home');

  const menuItems = [
    'Home', 'About', 'Challenge', 'Gallery', 'Hall of Fame', 'Contact', 'How To'
  ];

  return (
    <div className="menu-container">
      <img src={logo} alt="Logo" className="logo" />
      <nav className="menu-items">
        {menuItems.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`menu-item ${active === item ? 'active' : ''}`}
            onClick={() => setActive(item)}
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Menu;
