import { useParams } from "react-router-dom";
import { RestaurantMenuContainer } from "../../containers/RestaurantMenu/RestaurantMenu";

export default function RestaurantMenuPage() {
  const { restaurantId } = useParams();

  return <RestaurantMenuContainer restaurantId={restaurantId} />;
}
