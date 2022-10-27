import React from 'react'; //Todo componente de React lo lleva
import {BrowserRouter} from 'react-router-dom';//HashRouter con rutas estaticas Esta es Dinamica
import Header from './components/common/header';
import Footer from './components/common/footer';
import Routes from './routes';
function App() {
    return(
    <BrowserRouter>
    <Header/>
    <Routes/>
    <Footer/>
    </BrowserRouter>)
};

export default App;
