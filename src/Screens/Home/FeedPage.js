import React from "react";
import { BaseUrl } from "../../Constants/BaseUrl";
import { useRequestData } from "../../Hooks/UseRequestData";
import FeedCard from "../../Components/Home/FeedCard";
import { goToRestaurantsDetailsPage } from '../../Routes/Cordinator'
import { useHistory } from 'react-router-dom'

export default function FeedPage(props) {
  const restaurants = useRequestData(`${BaseUrl}/restaurants`, []);
  const history = useHistory()
  console.log (props.id)
  return (
    <div>
      
      {restaurants.map((restaurant) => {
        return (
          <FeedCard
            restaurant = {restaurant}
            key={restaurant.id}
            id={restaurant.id}
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
