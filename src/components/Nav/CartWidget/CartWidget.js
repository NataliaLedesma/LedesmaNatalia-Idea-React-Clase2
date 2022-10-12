import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../../../context/CartContext';



const CartWidget = () => {
    
    const [cantidadCarrito, setCantidadCarrito] = useState();
    const { cantidadTotal } = useContext(CartContext);

    const total = cantidadTotal();

    useEffect(() => {
        setCantidadCarrito(total) 
        
    }, [total]);


    return (
        <span>
            <span class="material-symbols-outlined">
            shopping_cart
            </span>
            <p style={{color: "black" }}>{cantidadCarrito? cantidadCarrito : ""}</p>
        </span>
    );
};

export default CartWidget;
