import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ThemeContextProvider } from "./contexts/ThemeContext/ThemeContextProvider";
import { store } from "./store";
import { Provider } from "react-redux";
import HomePage from "./pages";
import RestaurantsPage from "./pages/restaurant/Restaurants";
import RestaurantPage from "./pages/restaurant/Restaurant";
import CartPage from "./pages/cart/cart";
import NotFoundPage from "./pages/404";
import RestaurantMenuPage from "./pages/restaurant/RestaurantMenu";
import RestaurantReviewsPage from "./pages/restaurant/RestaurantReviews";
import AboutUsPage from "./pages/contacts/AboutUs";
import AddressesPage from "./pages/contacts/Addresses";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <ThemeContextProvider>
        <Layout>
          <Routes>
          <Route index element={<HomePage />} />
          <Route path="restaurants" element={<RestaurantsPage />}/>
          <Route path="restaurants/:restaurantId" element={<RestaurantPage />}/>
          <Route path="restaurants/:restaurantId/menu" element={<RestaurantMenuPage />}/>
          <Route path="restaurants/:restaurantId/reviews" element={<RestaurantReviewsPage />}/>
          <Route path="contacts/about-us" element={<AboutUsPage />}/>
          <Route path="contacts/addresses" element={<AddressesPage />}/>
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </ThemeContextProvider>
      </BrowserRouter>
    </Provider>
  );
}


export default App
