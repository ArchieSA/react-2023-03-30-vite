import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const Restaurant = ({ restaurant }) => {
  const { name, description } = restaurant || {};

  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <span>{description}</span>
      <div className={styles.navigationBar}>
        <Link
          to={`/restaurants/${restaurant.id}/menu`}
          className={styles.link}
        >
          Меню
        </Link>
        <Link
          to={`/restaurants/${restaurant.id}/reviews`}
          className={styles.link}
        >
          Отзывы
        </Link>
      </div>
    </div>
  );
};
