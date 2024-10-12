import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { backend_url, currency } from "../../App";
import './Confirm.css';

const Confirm = () => {
  const { products, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleConfirmOrder = async () => {
    const orderedProducts = products.filter(product => cartItems[product.id] > 0).map(product => ({
      id: product.id,
      name: product.name,
      quantity: cartItems[product.id],
      price: product.new_price,
      total: product.new_price * cartItems[product.id],
    }));

    const response = await fetch(`${backend_url}/confirmorder`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'), // Assuming you store the token in local storage
      },
      body: JSON.stringify({ products: orderedProducts, totalAmount }),
    });

    const data = await response.json();
    if (data.success) {
      alert(data.message); // Show success message
    } else {
      alert("Order confirmation failed!");
    }
  };

  return (
    <div className="confirm">
      <h1>Confirm Your Order</h1>
      <div className="confirm-items">
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div key={product.id} className="confirm-item">
                <img src={backend_url + product.image} alt={product.name} />
                <div className="confirm-item-details">
                  <h3>{product.name}</h3>
                  <p>{currency}{product.new_price} x {cartItems[product.id]}</p>
                  <p>Total: {currency}{product.new_price * cartItems[product.id]}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <h2>Total Amount: {currency}{totalAmount}</h2>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default Confirm;
