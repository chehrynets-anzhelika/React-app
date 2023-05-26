import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Header }  from "./components/Header/Header";
import  { Home } from "./pages/Home";
import  { Basket } from "./pages/Basket";
import {Favorite } from "./pages/Favorite";
import "./components/proptypes";
import { useDispatch } from 'react-redux';
import { productsFetch } from "./redux/actions/productsFetch";
import { openModal } from "./redux/actions/openModal";
import { addCurrentProduct } from "./redux/actions/current";

import { ViewContext, views } from "./context/viewContext";
import Toggle from "./components/Toggle/Toggler";

function App() {
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(productsFetch());
  }, [] );

const showModal = (e) => {
       let modalId = e.target.getAttribute("id");
       dispatch(addCurrentProduct(modalId));
       dispatch(openModal({
        header: "Add product to cart?", 
        text: "Confirmation of adding a product to the cart", 
        actions: ["Save", "Close"], 
        closeButton: true}));
       }

 return (
  <ViewContext.Consumer>
  {({theme, setTheme }) => (
    <>
    <Header/>
    <Toggle
      onChange={() => {
        if (theme === views.cards) setTheme(views.table);
        if (theme === views.table) setTheme(views.cards);
      }}
      value={theme === views.cards}
    />
    <Routes>
      <Route path="/" element={<Home show = {showModal}/>}/> 
      <Route path="/basket" element={<Basket/>}/> 
      <Route path="/favorite" element={<Favorite />}/>
    </Routes>
    
    </>
  )}
    </ViewContext.Consumer>
   );

}

export default App;


