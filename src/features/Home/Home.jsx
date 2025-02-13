import React from 'react';
import Product from './Product';
import Cart from './Cart';

function Home(props) {
    return (
        <div className="home-container">
            <div className="cart-container"><Cart/></div>
            <div className="product-container"><Product/></div>
        </div>
    );
}

export default Home;