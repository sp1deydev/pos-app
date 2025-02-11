import React from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductList from './ProductList';

function Product(props) {
    return (
        <>
            <ProductHeader/>
            <ProductList/>
        </>
    );
}

export default Product;