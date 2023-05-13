import { Dish } from "../../components/Dish/Dish";
import React from "react";

import styles from "./styles.module.scss";
import { DishContainer } from "../../containers/Dish/Dish";

export const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Меню</h3>
      <ul className={styles.dishList}>
        {menu.map((dishId) => (
          <DishContainer key={dishId} dishId={dishId} className={styles.dish} />
        ))}
      </ul>
    </div>
  );
};
