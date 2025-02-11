import React from 'react';
import Product from './Product';

function Home(props) {
    return (
        <div className="home-container">
            <div className="cart-container"></div>
            <div className="product-container"><Product/></div>
        </div>
    );
}

export default Home;