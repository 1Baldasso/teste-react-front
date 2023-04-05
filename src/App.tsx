import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HelmetProvider, Helmet} from 'react-helmet-async';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Comprar from './Pages/Comprar'
import Adicionar from './Pages/Adicionar';
import Editar from './Pages/Editar';
import Carrinho from './Pages/Carrinho';

function App() {
  return (
    <div className="App">
     <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Lucas Baldasso</title>
          <link rel="canonical" href="https://1baldasso-portfolio.vercel.app/" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </Helmet>
      </HelmetProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/comprar/:id" element={<Comprar/>}/>
          <Route path="/adicionar" element={<Adicionar/>}/>
          <Route path="/editar/:id" element={<Editar/>}/>
          <Route path="/carrinho" element={<Carrinho/>}/>
        </Routes>
    </div>
  );
}

export default App;
