import React from 'react';
import lafbLogo from '../imgs/Love At First Bite logo.webp';

const Header = () => {
  return (
    <header>
      <div id="header-logo-area">
        <img id="lafb-logo" src={lafbLogo} alt="Love At First Bite Bakery logo" />
      </div>

      <p id="alert">
        Please use the ORDER link to place an order for pick-up or delivery as soon as today.
      </p>

      <nav>
        <ul>
          <a href=""><li>HOME</li></a>
          <a href=""><li>MENU</li></a>
          <a href=""><li>ORDER</li></a>
          <a href=""><li>PRESS</li></a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
