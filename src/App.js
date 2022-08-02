import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartContextProvider from "./store/CartContextProvider";

function App() {

  const[catIsVisible, setCartIsVisible] =  useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
  }

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  return (
    <CartContextProvider>
    {catIsVisible && <Cart onHideCart = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}></Header>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
