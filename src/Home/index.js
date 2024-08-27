import React, { Fragment, useState } from 'react';
import Orders from '../Orders';

const Home = () => {
  // create imgs array, each with a unique id, src, alt text

  // render slide from imgs array objects
  const renderSlide = () => {
    <div className="slide">
      <img src="" alt="" />
    </div>
  };

  // map over imgs array with renderSlide

  return (
    <Fragment>
      <section id="front">
        <article id="gallery">
          <div>
            {/* insert var for gallery slides here */}
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
