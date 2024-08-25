import React from 'react';
import lafbLogo from '../imgs/Love At First Bite logo.webp';

const Header = () => {
  return (
    <header>
      <div id="header-logo-area">
        <img id="lafb-logo" src={lafbLogo} alt="Love At First Bite Bakery logo" />
      </div>

      <nav>
        <ul>
          <li>HOME</li>
          <li>MENU</li>
          <li>ORDER</li>
          <li>PRESS</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
