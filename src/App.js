import React from 'react'; //Todo componente de React lo lleva
import {BrowserRouter} from 'react-router-dom';//HashRouter con rutas estaticas Esta es Dinamica
import Header from './components/common/header';

function App() {
    return(
    <BrowserRouter>
    <Header/>
    </BrowserRouter>)
};

export default App;
