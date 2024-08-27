import React, { Fragment, useState } from 'react';
import Orders from '../Orders';
import cupcake1 from '../imgs/gallery/pecan caramel latte cupcake - lafb.jpg';
import cupcake2 from '../imgs/gallery/lavender earl grey cupcake - lafb.jpg';
import cupcake3 from '../imgs/gallery/mother\'s day bouquet cupcakes - lafb.jpg';
import cupcake4 from '../imgs/gallery/mother\'s day pink rose cupcake - lafb.jpg';
import cake1 from '../imgs/gallery/mini three-inch heart cake - lafb.jpg';
import cake2 from '../imgs/gallery/matcha green tea cake - lafb.jpg';
import cake3 from '../imgs/gallery/outer space cake - lafb.jpg';
import cake4 from '../imgs/gallery/spiderman birthday cake - lafb.jpg';
import cake5 from '../imgs/gallery/alien cake - lafb.jpg';
import cake6 from '../imgs/gallery/newborn cake - lafb.jpg';
import cake7 from '../imgs/gallery/twenty-first birthday cake - lafb.jpeg';

const Home = () => {
  // create galleryImgs array, each with a unique id, src, alt text
  const galleryImgs = [
    { id: 1, src: cupcake1, altText: 'pecan caramel latte cupcake' },
    { id: 2, src: cupcake2, altText: 'lavender earl grey cupcake' },
    { id: 3, src: cupcake3, altText: 'Mother\'s Day bouquet cupcakes' },
    { id: 4, src: cupcake4, altText: 'Mother\'s Day pink rose cupcake' },
    { id: 5, src: cake1, altText: 'mini three-inch heart cake' },
    { id: 6, src: cake2, altText: 'matcha green tea cake' },
    { id: 7, src: cake3, altText: 'outer space cake' },
    { id: 8, src: cake4, altText: 'Spiderman birthday cake' },
    { id: 9, src: cake5, altText: 'alien birthday cake' },
    { id: 10, src: cake6, altText: 'newborn cake' },
    { id: 11, src: cake7, altText: 'twenty-first birthday cake' }
  ];

  // render slide from imgs array objects
  const renderSlide = (img) => {
    <div className="slide">
      <img id={img.id} src={img.src} alt={img.altText} />
    </div>
  };

  // map over imgs array with renderSlide
  const slides = galleryImgs.map(renderSlide);

  // move back to previous slide

  // move on to next slide

  return (
    <Fragment>
      <section id="front">
        <article id="gallery">
          <div class="slides-container">
            { slides }
            <a class="prev">&#10094;</a>
            <a class="next">&#10095;</a>
          </div>

          <div id="slide-selector">
            {/* use func to map how many dots to create */}
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </article>

        <Orders />
      </section>

      <section id="lafb-intro">
        <h2 id="motto">
          Delicious old-fashioned baked goods made from scratch with the
          finest quality ingredients. 
        </h2>

        <p  id="intro-about" className="text">
          Love at First Bite is a world of Madagascar bourbon vanilla,
          Saigon cinnamon, Guittard and Callebaut chocolate. We use real
          butter, milk, and eggs from local dairies and package our cupcakes
          in biodegradable containers.
        </p>
      </section>

      <section id="delivery-info-shortened">
        <h3>Delivery</h3>

        <p className="text">
          $8 local &#40;Berkeley&#41; delivery for 24 or more cupcakes.
          $12-$45 to other locations around the Bay Area. See our delivery
          page for details. Alternatively, order individual cupcakes for
          delivery by <a href="https://postmates.com/merchant/love-at-first-bite-berkeley" target="_blank">Uber Eats</a>.
        </p>
      </section>

      <section id="events-info">
        <h3>Events</h3>

        <p className="text">
          Have a company event, graduation party, wedding, anniversary, or
          other special occasion? Looking for a dessert caterer? Look no further!
          Love at First Bite can work with you to create the perfect addition to
          your event from custom flavors and colors to match your theme, custom
          colors to match your theme, tiered wedding presentations, as well as
          custom toppers with your company logo or other image. We also offer
          set-up and stand rentals. Delivery and set-up fees are waived for large
          orders. Contact us today to get started!
        </p>
      </section>
    </Fragment>
  );
};

export default Home;
