import React from 'react';
import { subtract } from '../../Utilities/Calculate';

const Material = () => {
    const first = 65;
    const second = 50;
    const result2 = subtract(first,second);
    
    return (
        <div>
            <h2>This is my material storage</h2>
            <h3>Price : {result2}</h3>
        </div>
    );
};

export default Material;