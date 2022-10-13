import React from "react";
import './index.scss';
import {Link} from 'react-router-dom';

const Header= () => {
return(
    <>
    <header className="header-container">
        <ul>
            <li>
            <Link to="/">Inicio</Link>
            </li>
            <li>
            <Link to="/peliculas">Peliculas</Link>
            </li>
            <li>
            <Link to="/series">Series</Link>
            </li>
            <li>
            <Link to="/anime">Anime</Link>
            </li>
        </ul>
    </header>
    </>
    )
}
export default Header;
