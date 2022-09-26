import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Form from '../Form/Form';
import { useState } from "react";


const Cart = () => {
    const [idCompra, setIdCompra] = useState('');
    const { cart, clear, removeItem, totalPrice } = useContext(CartContext);

    const total = totalPrice();

    const handleId = (id) => {
        setIdCompra(id)

    }

    if (idCompra) {
        return <h3>Tu orden fue enviada, nos comunicaremos a la brevedad.
            Número de orden: {idCompra}. 
        Muchas gracias por comprar en Tienda Tiggy!</h3>
    }



    if (cart.length === 0) {
        return <>
            <h1>Carrito está vacío</h1>
            <Link to="/"> Vuelve a inicio </Link>
        </>;
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            }}
        >

            {cart.map((prod) => (
                <div
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        borderRadius: '8px',
                        display: 'flex',
                        justifyContent: 'space-around',
                        padding: '8px',
                        margin: '8px',
                    }}
                >
                    <h3>{prod.title}</h3>
                    <h3>Cantidad: {prod.cantidad}</h3>
                    <h3>Precio${prod.price}.-</h3>
                    <button onClick={() => removeItem(prod.id)}>Borrar producto</button>
                </div>
            ))}
            <button onClick={clear}>Borrar Carrito</button>
            <h4>Total: ${total}</h4>

            <Form cart={cart} total={total} clear={clear} handleId={handleId} />

            
        </div>
    );
};

export default Cart;

