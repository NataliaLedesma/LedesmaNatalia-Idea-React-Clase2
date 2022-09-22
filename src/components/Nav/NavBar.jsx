import React from 'react'
import estilos from './navbar.module.css'
import CartWidget from './CartWidget/CartWidget';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={estilos.NavBar}>
            

            <Link to='/'> Home </Link>
            <ul class="right">
                <li> <Link to="/category/Chalecos">Chalecos</Link> </li>
                <li> <Link to="/category/Remeras">Remeras</Link> </li>
                <li> <Link to="/category/Pilotos">Pilotos</Link> </li>
            </ul>

            <Link to="/cart"> <CartWidget /> </Link>

        </nav>
    );
};

export default NavBar;