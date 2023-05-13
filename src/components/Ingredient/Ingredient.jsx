import { Button } from "../../components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";
import { useAmount } from "../../hooks/useAmount";

export const Ingredient = ({ ingredient, className }) => {
  const { amount, increment, decrement } = useAmount(1);

  return (
    <div className={classNames(styles.root, className)}>
      <span className={styles.title}>{ingredient}</span>
      <div>
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
    </div>
  );
};
