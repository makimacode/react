import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/Cartwidget';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
// import { NotificationProvider } from './Notification/Notification';
import { Component } from 'react';

function App() {
  return (
    <div className="App"> 
        
            <CartContextProvider>
              <BrowserRouter>
                <NavBar/>
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado de categoria: '/>} />
                  <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
                  <Route path='/Cart' element={<Cart />} />
                  <Route path='/Checkout' element={<Checkout />} />
                  <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
                </Routes>
              </BrowserRouter>
            </CartContextProvider>
       
    </div>
  );
}

export default App;