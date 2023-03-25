import React from 'react';
import { multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first = 13;
    const second = 13;
    const result = multiply(first,second);
    return (
        <div>
            <h1>This is my shoes ???</h1>
            <h2>Price : {result.toFixed(2)}</h2>
        </div>
    );
};

export default Shoes;