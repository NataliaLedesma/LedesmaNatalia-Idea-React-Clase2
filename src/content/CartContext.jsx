import { createContext, useState } from "react";


export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (itemDetail, cantidad) => {
        setCart([...cart, {...itemDetail, cantidad }])
    };

    const isInCart = (id) => {
        const busquedaCart = cart.find((item) => item.id === id)
        if (busquedaCart !== undefined){
            return true
        }
        else {
            return false
        }

    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        const itemEncontrado = cart.filter((itemB) => itemB.id !== id) 
        setCart(itemEncontrado);
    }

    return (
    <CartContext.Provider value={{ cart, addToCart, isInCart, clear, removeItem }}>
        {props.children}
    </CartContext.Provider>
    );
};

export default CartProvider;