import { RestaurantCardContainer } from "../../containers/RestaurantCard/RestaurantCard";

import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Restaurants = ({ restaurantIds }) => {
  return (
    <div className={styles.root}>
      {restaurantIds.map((restaurantId) => (
        <Link
          key={restaurantId}
          to={`/restaurants/${restaurantId}`}
          className={styles.restaurantLink}
        >
          <RestaurantCardContainer restaurantId={restaurantId} />
        </Link>
      ))}
    </div>
  );
};
