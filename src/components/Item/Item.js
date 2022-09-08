import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { item } = props
    return (
        <div class="cards" key={item.id}>
            <h4>{item.title}</h4>
            <h5>${item.price}.-</h5>
            <img src={item.img} alt="" />
            <Link to={`/detail/${item.id}`}>
                <button>Ver Detalle</button></Link>
        </div>
    )
}

export default Item