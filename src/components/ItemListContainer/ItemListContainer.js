import React, { useEffect, useState } from 'react';
import products from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });

        getProducts
            .then((data) => {
                setItems(data);
            })
            .catch((error) => {
            
            })
            .finally(() => {
            
            });
    }, []);

    console.log(items);


    return (
        <div>
            <div>
                <h1> {saludo} </h1>
                <ItemList items={items} />
            </div>

        </div>


    );
};

export default ItemListContainer