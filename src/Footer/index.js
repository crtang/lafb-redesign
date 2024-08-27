import React from 'react';
import lafbFb from '../imgs/facebook.svg';
import lafbFbHover from '../imgs/facebook-hover.svg';
import lafbInsta from '../imgs/instagram.svg';
import lafbInstaHover from '../imgs/instagram-hover.svg';

const Footer = () => {
  return (
    <footer>
      <div id="store-info">
        <div id="hours">
          <h2>Hours</h2>
          <p>
            Tuesday - Saturday | 10 am to 6 pm
          </p>
        </div>

        <div id="location">
          <h2>Location</h2>
          <p>
            Next to the historic first location of Peet's Coffee
            <br />
            Walnut Square
            <br />
            2122 Vine St.
            <br />
            Berkeley, CA
          </p>
        </div>

        <div id="social-and-policies">
          <p>
            <a href="https://www.facebook.com/loveatfirstbiteberkeley/" target="_blank">
              <img
                className="social-media"
                src={lafbFb}
                alt="Facebook page for Love At First Bite Bakery"
                onMouseOver={e => (e.currentTarget.src = lafbFbHover )}
                onMouseOut={ e => (e.currentTarget.src = lafbFb )}
              />
            </a>

            <a href="https://www.instagram.com/love.at.first.bite/" target="_blank">
              <img
                className="social-media"
                src={lafbInsta}
                alt="Instagram for Love At First Bite Bakery"
                onMouseOver={e => (e.currentTarget.src = lafbInstaHover )}
                onMouseOut={ e => (e.currentTarget.src = lafbInsta )}
              />
            </a>
          </p>

          <p>
            <a href="#" target="_blank">Policies</a>
          </p>
        </div>
      </div>

      <div id="copyright-and-disclaimer">
        <p>
          All information and photos belong to Love At First Bite Bakery.
          This site is simply a redesign I created, which I suppose is a bit
          similar to the redesign case studies of UI/UX designers &#40;without
          the formal training or user research&#41;.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
