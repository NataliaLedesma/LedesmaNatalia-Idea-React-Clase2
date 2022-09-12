import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import products from '../../mock/products';
import ItemDetail from '../iItemDetail/ItemDetail';


const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({});

    const {idProducto} = useParams();
    
    useEffect(() => {
        const getProducts = () =>
            new Promise((res, rej) => {
                const unicoProducto = products.find((producto) => producto.id === Number(idProducto));
                
            setTimeout(() => {
                res(unicoProducto);
            }, 2000);
        });

        getProducts()
            .then((data) => {
                setItemDetail(data)
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
            </div>

        </div>


    );
};

export default ItemDetailContainer