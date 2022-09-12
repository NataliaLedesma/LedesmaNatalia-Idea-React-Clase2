import React from 'react';
import { Routes , Route } from 'react-router-dom';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import Form from '../Form/Form';

const Main = () => {
    return (
        <div>
            <Form />
            <Routes>
                <Route path='/' element={<ItemListContainer
                    saludo="Te damos la bienvenida a Tienda Tiggy " />} 
                />
                <Route path='/detail/:idProducto' element={<ItemDetailContainer />}
                />
                <Route path='/category/:categoryId' element={<ItemListContainer />} 
                />
            </Routes>
        </div>
    )
}

export default Main;