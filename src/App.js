// src/App.js

import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import './styles/styles.css'; // Importar estilos CSS personalizados

function App() {
    return (
        <div className="text-center">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;