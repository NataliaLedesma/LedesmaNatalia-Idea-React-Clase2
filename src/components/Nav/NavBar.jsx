import React from 'react'
import estilos from './navbar.module.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className={estilos.NavBar}>

            <ul class="right">
                <li><a href="https://google.com">Nosotros</a></li>
                <li><a href="https://google.com">Productos</a></li>
                <li><a href="https://google.com">Contacto</a></li>
            </ul>

            <CartWidget>

            </CartWidget>

        </nav>
    );
};

export default NavBar;