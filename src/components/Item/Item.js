import React from 'react'

const Item = (props) => {
    const {item} = props
    return (
        <div key={item.id}>
            <h4>{item.title}</h4>
            <h5>${item.price}.-</h5>
            <img src={item.img} alt="" />
        </div>
    )
}

export default Item