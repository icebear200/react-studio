import "./App.css";
import { useState } from "react";
import BakeryItem from "./components/BakeryItem";
import bakeryData from "./assets/bakery-data.json";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


  const [cart, setCart] = useState([])
  const increment = (itemName) => {
   //set cart first to previous cart contents and update it by adding items to that previous Cart
    setCart ((prevCart) => ({...prevCart, [itemName]: (prevCart[itemName] || 0) + 1 }));
    } ;

  const cartTotal = () => {
    let total = 0;
    for (const itemName in cart){
      const itemCount = cart[itemName]
      let itemPrice = bakeryData.find((item) => item.name == itemName);
      if (itemCount > 0) {
        total += itemCount * itemPrice.price;
      }
    }
    return total.toFixed(2);
  }
  return (
    <div className="App">=
     <div className="angie">  <h1>Angie's Bakery</h1> </div> {/* TODO: personalize your bakery (if you want) */}
      <div className="shop"> 
      <div className="bakeryContainer" >
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem data={item}  key={index}  increment={() => increment(item.name) } 
        price ={item.price}
        description = {item.description} 
        image = {item.image}
        />
      ))}

      </div>

      <div className="cart"> 
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
        <u1> 
          {Object.entries(cart).map(([itemName, itemCount]) => (
            <li key={itemName}> {itemCount}x {itemName} </li>
        
          ))}
        </u1>
        <div> <h4> Total:  ${cartTotal()}</h4>
        </div> 
      </div>
      </div>
      </div>
   
  );
}


export default App;
