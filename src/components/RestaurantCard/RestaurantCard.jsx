import React from "react";

import styles from "./styles.module.scss";
import classNames from "classnames";

export const RestaurantCard = ({ restaurant, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <img
        src={restaurant.img}
        width="150"
        height="100"
        alt="restaurant photo"
        className={styles.image}
      />
      <div className={styles.mainInfo}>
        <h3>{restaurant.name}</h3>
        <span>{restaurant.description}</span>
      </div>
    </div>
  );
};
