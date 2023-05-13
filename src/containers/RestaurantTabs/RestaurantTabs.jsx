import { Tabs } from "../../components/Tabs/Tabs";
import { selectRestaurants } from "../../store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantTabsContainer = ({ onTabClick }) => {
  const restaurants = useSelector(selectRestaurants);
  const tabs = restaurants.map(({ id, name }) => ({ id, title: name }));

  return <Tabs tabs={tabs} onTabClick={onTabClick} />;
};
