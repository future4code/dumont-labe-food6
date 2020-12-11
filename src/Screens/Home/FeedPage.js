import React from "react";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useRequestData } from "../../Hooks/UseRequestData";
import FeedCard from "../../Components/Home/FeedCard";

export default function FeedPage() {
  const restaurants = useRequestData(`${BaseUrl}/restaurants`, []);
  return (
    <div>
      {restaurants.map((restaurant) => {
        return (
          <FeedCard
            key={restaurant.id}
            category={restaurant.category}
            name={restaurant.name}
            logoUrl={restaurant.logoUrl}
            description={restaurant.description}
            deliveryTime={restaurant.deliveryTime}
            shipping={restaurant.shipping}
          />
        );
      })}
    </div>
  );
}
