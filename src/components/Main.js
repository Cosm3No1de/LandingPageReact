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
                <h1 className="cover-heading">Cosm3no1de.dev</h1>
                <p className="lead">Cosm3no1de!</p>

                {/* Cuadrado de reproducción de video */}
                <div className="video-container">
                    <div className="video-player">
                        <div className="play-button">
                            <span>&#9658;</span> {/* Icono de reproducción (triángulo) */}
                        </div>
                    </div>
                </div>

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