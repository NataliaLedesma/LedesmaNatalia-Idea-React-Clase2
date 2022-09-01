import React from 'react'
import Item from '../Item/Item'

const ItemList = (props) => {
    const {items} = props
    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <Item item={item} />
                    )
                })
            }
        </div>

    )
}

export default ItemList