// src/components/Main.js

import React from 'react';
import '../styles/main.css'; // Importar estilos

function Main() {
    return (
        <div className="main-container">
            {/* Navbar */}
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><a href="#contact">Contacto</a></li>
                    <li><a href="#social">Redes Sociales</a></li>
                    <li><a href="#bio">Bio</a></li>
                </ul>
            </nav>

            {/* Contenido principal */}
            <main role="main" className="inner cover">
                <h1 className="cover-heading">Bienvenido a Mi Página</h1>
                <p className="lead">Cosm3no1de!</p>

                {/* Contenedor de botones apilados */}
                <div className="button-container">
                    <button className="btn">Botón 1</button>
                    <button className="btn">Botón 2</button>
                    <button className="btn">Botón 3</button>
                    <button className="btn">Botón 4</button>
                    <button className="btn">Botón 5</button>
                </div>
            </main>
        </div>
    );
}

export default Main;