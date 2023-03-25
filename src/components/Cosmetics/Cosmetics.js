import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {
    const cosmetics =[
        {id:1,name:'alta',price:100},
        {id:2,name:'salta',price:200},
        {id:3,name:'malta',price:300},
        {id:4,name:'solita',price:400},
        {id:5,name:'gogol',price:500},
        
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics storage!!</h1>
            <div className='container'>
            {
                cosmetics.map(cosmetic =><Cosmetic
                key={cosmetic.id}
                cosmetic ={cosmetic}
                ></Cosmetic>)
            }
            </div>
        </div>
    );
};

export default Cosmetics;
    
    