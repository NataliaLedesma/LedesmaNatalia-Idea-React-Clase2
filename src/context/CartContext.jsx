import React from "react";
import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (itemDetail, cantidad) => {
        if (isInCart(itemDetail.id)) {
            cantidadesDeProducto(itemDetail, cantidad)
        } else {
            setCart([...cart, { ...itemDetail, cantidad }])
        };
    };

    const isInCart = (id) => {
        const busquedaCart = cart.find((item) => item.id === id)
        if (busquedaCart !== undefined) {
            return true
        }
        else {
            return false
        }

    }

    

    const cantidadesDeProducto = (item, cantidad) => {
        const actualizarProductos = cart.map((prod) => {
            if (prod.id === item.id) {
                const productosActualizados = {
                    ...prod,
                    cantidad: cantidad,
                };

                return productosActualizados;
            }
            else {
                return prod;
            }
        });
        setCart(actualizarProductos);

    };

    const clear = () => {
        setCart([])
    };


    const removeItem = (id) => {
        const itemEncontrado = cart.filter((itemB) => itemB.id !== id)
        setCart(itemEncontrado);
    }

    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad * prod.price;
        });
        return acumulador;

    };

    const cantidadPorProducto = (id) => {
        const producto = cart.find((prod) => prod.id === id);
        return producto?.cantidad;
    };

    const cantidadTotal = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        return acumulador;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                cantidadTotal,
                addToCart,
                isInCart,
                clear,
                removeItem,
                totalPrice,
                cantidadPorProducto,
            }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider; 