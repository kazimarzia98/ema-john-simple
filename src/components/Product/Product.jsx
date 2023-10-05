// import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product;
    const handlerToCart = props.handlerToCart;


    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} stars</p>
            </div>
            <button onClick={() => handlerToCart(props.product)} className='btn-cart'>
                Add To Cart  
                 <FontAwesomeIcon icon= {faShoppingCart} />
                </button>
        </div>
    );
};

export default Product;