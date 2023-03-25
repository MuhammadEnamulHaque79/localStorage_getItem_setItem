import React from 'react';
import { division } from '../../Utilities/Calculate';

const FirstAids = () => {
    const number1 = 200;
    const number2 = 100;
    const perPrice = division(number1,number2);
    return (
        <div>
            <h2>This is my first aid box</h2>
            <h3>Price : {perPrice.toFixed(2)}</h3>
        </div>
    );
};

export default FirstAids;