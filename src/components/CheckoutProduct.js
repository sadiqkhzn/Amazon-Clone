import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    //remove the item from cart
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct__container">
      <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromCart}>Remove from Cart</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
