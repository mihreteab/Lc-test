import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <ul>
      <li>
        <Link to="/laboratory" className="submenu menu activeClass">
          Laboratory
        </Link>
      </li>
      <li>
        <Link to="/account-creator" className="submenu menu activeClass">
          Account Creator
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
