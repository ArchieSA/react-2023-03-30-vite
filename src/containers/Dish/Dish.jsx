import { Dish } from "../../components/Dish/Dish";
import { selectDishById } from "../../store/entities/dish/selectors";
import { cartSlice } from "../../store/ui/cart";
import { selectDishAmount } from "../../store/ui/cart/selectors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const DishContainer = ({ dishId, ...props }) => {
  const dish = useSelector((state) => selectDishById(state, { dishId }));
  const amount = useSelector((state) => selectDishAmount(state, { dishId }));
  const dispatch = useDispatch();
  const increment = () => dispatch(cartSlice.actions.increment(dishId));
  const decrement = () => dispatch(cartSlice.actions.decrement(dishId));

  return (
    <Dish
      dish={dish}
      amount={amount}
      increment={increment}
      decrement={decrement}
      {...props}
    />
  );
};
