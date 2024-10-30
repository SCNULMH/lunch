import React from 'react';

const RestaurantList = ({ restaurants }) => (
  <div className="scrollable-list" id="restaurantList">
    {restaurants.length === 0 ? (
      <p>근처에 식당이 없습니다.</p>
    ) : (
      restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-item">
          <h3>{restaurant.place_name}</h3>
          <p>주소: {restaurant.road_address_name || restaurant.address_name}</p>
          <p>전화번호: {restaurant.phone || '정보 없음'}</p>
          <p>카테고리: {restaurant.category_name}</p>
        </div>
      ))
    )}
  </div>
);

export default RestaurantList;
