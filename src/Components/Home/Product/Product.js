import React from 'react';
import './Product.css'

const Product = ({product}) => {
    return (
        <div className="col-md-3 mb-5">
            <div className="card productCard">
                <img className="" src={product.img} alt=""/>
                <div className="mt-5">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <h4 className="commonColor">${product.price}</h4>
                </div>
                <button className="cartBtn mt-3 mb-3">Add to cart <i class="fas fa-shopping-cart"></i></button>
            </div>
        </div>
    );
};

export default Product;