import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  const [showCart, setShowCart] = useState(false)
  
  const showCartHandler = () => {
   setShowCart(true);
  }
  
  const closecarthandler = () => {
    setShowCart(false)
  }

  return (
    <div>
      {showCart && <Cart onClose={closecarthandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Meals/>
    </div>
  );
}

export default App;
