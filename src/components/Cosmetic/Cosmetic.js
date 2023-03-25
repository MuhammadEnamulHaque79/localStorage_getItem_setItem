import React from 'react';
import { addToDb } from '../../Utilities/fakedb';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const{name,price,id} = props.cosmetic;

    const addToCart=(id)=>{
        // console.log('item added to cart',id);
        // localStorage.setItem(id,1);
        addToDb(id,1);
    }

    return (
        <div className='product-container'>
            <h1>Name : {name}</h1>
            <h2>Price :{price}</h2>
            <button onClick={()=>addToCart(id)}>Add To Cart</button>
        </div>
    );
};

export default Cosmetic;