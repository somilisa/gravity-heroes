import React from 'react';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import { useState } from 'react';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav>
      <div className='nav-header'>
        <img src={logo} alt='gravity'></img>
        <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      <ul className={`${showLinks ? 'show-container' : ''}`}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
