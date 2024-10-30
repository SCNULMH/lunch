import React, { useEffect } from 'react';

const MapComponent = ({ mapLoaded, restaurants, mapCenter }) => {
  useEffect(() => {
    if (mapLoaded && window.kakao) {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(mapCenter.lat, mapCenter.lng),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      // 레스토랑 위치에 마커 추가
      restaurants.forEach((restaurant) => {
        const markerPosition = new window.kakao.maps.LatLng(restaurant.y, restaurant.x);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          title: restaurant.place_name,
        });
        marker.setMap(map);
      });
    }
  }, [mapLoaded, mapCenter, restaurants]);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
