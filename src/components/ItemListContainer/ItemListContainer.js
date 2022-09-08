import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import products from '../../mock/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([])

    const {categoryId} = useParams() 

    useEffect(() => { 
            const getProducts = new Promise((res, rej) => {
                const prodFiltrados = products.filter( (prod) => (prod.category === categoryId) )
                
                setTimeout(() => { 
                    res(categoryId ? prodFiltrados : products);
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

        
    }, [categoryId]);

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