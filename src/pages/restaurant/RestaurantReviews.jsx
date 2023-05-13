import { useParams } from "react-router-dom";
import { RestaurantReviewsContainer } from "../../containers/RestaurantReviews/RestaurantReviews";

export default function RestaurantReviewsPage() {
  const { restaurantId } = useParams();

  return <RestaurantReviewsContainer restaurantId={restaurantId} />;
}
