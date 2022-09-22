import React, { useState } from 'react';


const ItemCount  = ({ stock, onAdd, initial =1 }) => {
    const [count, setCount] = useState(initial);

    const sumar = () => {
        count < stock && setCount(count + 1);

    };

    const restar = () => {
        count > 0 &&  setCount(count - 1);
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <p>Cantidad: {count} </p>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    );
};


export default ItemCount;