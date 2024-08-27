import React, { Fragment } from 'react';
import Orders from '../Orders';

const Home = () => {
  // create gallery of best photos and creations

  return (
    <Fragment>
      {/* 
      gallery

      intro to LAFB

      delivery info (shortened)

      events info
      */}
      <section id="gallery">
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
