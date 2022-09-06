import React, { useEffect, useState } from 'react'
import products from '../../mock/products';
import ItemDetail from '../iItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({})

    useEffect(() => {
        const getProducts = new Promise((res, rej) => {
            setTimeout(() => {
                res(products);
            }, 2000);
        });

        getProducts
            .then((products) => {
                const unicoProducto = products.find((producto) => producto.id === 3)
                setItemDetail(unicoProducto);
            })
            .catch((error) => {
                console.log("Rompió")
            
            })
            .finally(() => {
            
            });
    }, []);

    console.log(itemDetail);


    return (
        <div>
            <div>
                
                <ItemDetail itemDetail={itemDetail} />
            </div>

        </div>


    );
};

export default ItemDetailContainer