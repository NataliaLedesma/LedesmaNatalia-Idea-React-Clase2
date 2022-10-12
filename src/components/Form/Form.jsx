
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import { db } from '../../firebaseConfig';

import { useState } from 'react';

const Form = ({ cart, total, clear, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [mail, setMail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, telefono: telefono, mail: mail },
            items: cart,
            total: total,
            date: serverTimestamp()
        };

        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clear();
        }

    )};

    const handleChangeNombre = (event) => {
        setNombre(event.target.value);
    }

    const handleChangeTelefono = (event) => {
        setTelefono(event.target.value);
    }

    const handleChangeMail = (event) => {
        setMail(event.target.value);
    }



    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text" placeholder='Nombre'
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />

                <input
                    type="text" placeholder='Telefono'
                    name="Telefono"
                    value={telefono}
                    onChange={handleChangeTelefono}
                />

                <input
                    type="text" placeholder='Mail'
                    name="Mail"
                    value={mail}
                    onChange={handleChangeMail}
                />
                <button> Enviar </button>
            </form>
        </div>
    )
};

export default Form;