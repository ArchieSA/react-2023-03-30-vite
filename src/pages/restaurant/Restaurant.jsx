import { useParams } from "react-router-dom";
import { RestaurantContainer } from "../../containers/Restaurant/Restaurant";

export default function RestaurantPage() {
  const {restaurantId} = useParams();

  return <RestaurantContainer restaurantId={restaurantId} />;
}
