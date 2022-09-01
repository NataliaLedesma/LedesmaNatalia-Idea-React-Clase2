import React, { useState } from 'react';


const ItemCount = ({stock}) => {

        const [initial, setInitial] = useState(0);

        const sumar = () => {
            initial < stock && setInitial(initial + 1);
        };

        const restar = () => {
            initial > 0 && setInitial(initial - 1);
        }; 

        const onAdd = (initial) => {
            alert("Se agregaron los productos al carrito")
        }

        return (
            <div>
                <button onClick={restar}> - </button>
                <button onClick={sumar}> + </button>
                <p>Cantidad: {initial} </p>
                <button onClick={onAdd}> Agregar al carrito </button>
            </div>
        );
    };

export default ItemCount;