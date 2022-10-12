import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const itemCollection = collection(db, "productos");
        const q = categoryId
        ?  query(itemCollection, where("category", "==", categoryId)):itemCollection;

        getDocs(q).then((res) => {
            const products = res.docs.map((prod) => {
                return { 
                    id: prod.id,
                    ...prod.data(),

                }
            });
            setItems(products);
        })
        .catch((error) => {
    
        });


    }, [categoryId]);

    


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