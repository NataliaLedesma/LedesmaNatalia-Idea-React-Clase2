import React from 'react';



const ItemDetail = (props) => {
    const { itemDetail } = props
    return (
        <div key={itemDetail.id}>
            <h4>Detalle del Producto</h4>
            <h4>{itemDetail.title}</h4>
            <h5>${itemDetail.price}.-</h5>
            <img src={itemDetail.img} alt="" />

        </div>
    )
}

export default ItemDetail;