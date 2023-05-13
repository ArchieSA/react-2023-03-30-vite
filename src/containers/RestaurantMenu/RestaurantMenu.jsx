import { Menu } from "../../components/Menu/Menu";
import { selectIsDishLoading } from "../../store/entities/dish/selectors";
import {
  fetchDishByRestaurantId,
} from "../../store/entities/dish/thunk/loadDishByRestaurantIdIfNotExisted";
import { selectMenuByRestaurantId } from "../../store/entities/restaurant/selectors";
import { fetchRestaurants } from "../../store/entities/restaurant/thunks/loadRestaurantIfNotExisted";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectMenuByRestaurantId(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  if (!menu?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Menu menu={menu} />;
}; 
