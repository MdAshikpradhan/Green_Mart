import React from 'react';
import Product from '../Product/Product';
import product1 from '../../../images/product.jpg';
import product2 from '../../../images/product2.jpg';
import './Products.css';

const Products = () => {
    const Products = [
        {
            name: 'Tire Car Wheel',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, magni?',
            img: product1,
            price: '237.59'
        },
        {
            name: 'Aqualine Deisel Oil',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, magni?',
            img: product2,
            price: '168.59'
        },
        {
            name: 'Car Brake System',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, magni?',
            img: product1,
            price: '1.59'
        },
        {
            name: 'Canister For Liquids 5I',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, magni?',
            img: product2,
            price: '249.59'
        }
    ]
    return (
        <div className="container text-center mt-5">
            <p className="bannerTitleText">ONLINE STORE</p>
            <h1>Popular Products</h1>
            <div className="row mt-5">
                {
                    Products.map(product => <Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;