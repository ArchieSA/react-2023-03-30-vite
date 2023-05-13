import { useSelector } from "react-redux";
import React from "react";
import { DishContainer } from "../../containers/Dish/Dish";

export const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {Object.entries(cart).map(([id]) => (
          <li key={id}>
            <DishContainer dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};
