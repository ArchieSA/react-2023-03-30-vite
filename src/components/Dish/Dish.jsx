import { Button } from "../../components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Ingredients } from "../../components/Ingredients/Ingredients";
import classNames from "classnames";

export const Dish = ({ dish, amount, increment, decrement, className }) => {
  if (!dish) {
    return null;
  }

  const { name, price } = dish;

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{name}</span>
      <span className={styles.price}>{price}р</span>
      {amount > 0 && <span className={styles.sum}>{amount * price}р</span>}
      <Button
        className={styles.decrementAction}
        type="secondary"
        disabled={amount === 0}
        onClick={decrement}
      >
        -
      </Button>
      {amount}
      <Button
        className={styles.incrementAction}
        type="primary"
        disabled={amount === 5}
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
};
