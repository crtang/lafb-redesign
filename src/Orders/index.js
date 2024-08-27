import React from 'react';

const Orders = () => {
  // upon clicking 'Cake Orders', trigger content change to native Orders page
  
  return (
    <article className="purchase-options">
      <a href="https://my-site-104209-108003.square.site/s/order" target="_blank">
        <button className="online-store">
          Online Store
        </button>
      </a>

      <a href="" target="_blank">
        <button className="cake-orders">
          Cake Orders
        </button>
      </a>
    </article>
  );
};

export default Orders;
