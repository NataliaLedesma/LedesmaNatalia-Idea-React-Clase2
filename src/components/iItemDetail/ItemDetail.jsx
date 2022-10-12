import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ itemDetail }) => {
    const [cantidad, setCantidad] = useState(0);
    const { cart, addToCart,cantidadPorProducto } = useContext(CartContext);

    const cantidadCarrito = cantidadPorProducto(itemDetail.id)


    const onAdd = (cantidad) => {
        
        setCantidad(cantidad);
        addToCart(itemDetail, cantidad);
    };
    

    return (
        <div key={itemDetail.id}>
            <h4>Detalle del Producto</h4>
            <h4>{itemDetail.title}</h4>
            <h5>${itemDetail.price}.-</h5>
            <img src={itemDetail.img} alt="" />
            {
                cantidad === 0 ? <ItemCount stock={itemDetail.stock} initial={cantidadCarrito} onAdd={onAdd} /> : <Link to='/cart'>Ir al carrito</Link>
            }       

            {
                cantidad !== 0 ? <button><Link to='/cart'>Terminar Compra</Link></button> : ""
            }


        </div>
    )
}

export default ItemDetail;