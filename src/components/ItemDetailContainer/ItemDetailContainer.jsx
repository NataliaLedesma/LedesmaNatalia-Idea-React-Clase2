import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
//import products from '../../mock/products';
import ItemDetail from '../iItemDetail/ItemDetail';
import { db } from '../../firebaseConfig';
import { getDoc, doc, collection } from "firebase/firestore"



const ItemDetailContainer = () => {
    const [itemDetail, setItemDetail] = useState({});

    const { idProducto } = useParams();

    useEffect(() => {
        const itemCollection = collection(db, "productos")
        const ref = doc(itemCollection, idProducto)
        getDoc(ref)
            .then((res) => {
                setItemDetail({
                    id: res.id,
                    ...res.data(),

                })
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