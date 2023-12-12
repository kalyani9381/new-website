import React from "react";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className="kl_carousel-item">
      <div></div>
      <img className="kl_carousel-img" src={item.icon} />
      <div className="kl_carousel-item-text">{item.description}</div>
    </div>
  );
};
