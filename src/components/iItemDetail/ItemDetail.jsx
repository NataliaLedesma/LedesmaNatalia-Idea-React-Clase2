import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({ itemDetail }) => {
    const [cantidad, setCantidad] = useState(0);


    const onAdd = (cantidad) => {
        console.log(cantidad)
        setCantidad(cantidad)
    }
    return (
        <div key={itemDetail.id}>
            <h4>Detalle del Producto</h4>
            <h4>{itemDetail.title}</h4>
            <h5>${itemDetail.price}.-</h5>
            <img src={itemDetail.img} alt="" />
            {
                cantidad === 0 ? <ItemCount stock={itemDetail.stock} initial={1} onAdd={onAdd} /> : <Link to='/carrito'>Ir al carrito</Link>
            }



        </div>
    )
}

export default ItemDetail;