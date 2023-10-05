import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, seller, quantity, price } = props.product;
    return (
        <div className='product'>
            <img src={img} alt=''></img>
            <div className='product-info'>
                <h4 className='product-name'>{name}</h4>
                <h5>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {quantity} stars</p>
            </div>
            <button className='btn-cart'>Add To Cart </button>
        </div>
    );
};

export default Product;