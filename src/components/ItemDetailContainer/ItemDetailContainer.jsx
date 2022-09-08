import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../mock/products';
import ItemDetail from '../iItemDetail/ItemDetail';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})
    const {idProducto} = useParams()
    
    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });

        getProducts
            .then((products) => {
                const unicoProducto = products.find((producto) => producto.id === idProducto)
                setItemDetail(unicoProducto);
            })
            .catch((error) => {
                console.log("Rompió")
            
            })
            .finally(() => {
            
            });
    }, [idProducto]);

    console.log(itemDetail);


    return (
        <div>
            <div>
                
                <ItemDetail itemDetail={itemDetail} />
                <ItemCount stock={10} />
            </div>

        </div>


    );
};

export default ItemDetailContainer