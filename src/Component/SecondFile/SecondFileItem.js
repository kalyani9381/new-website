import React from "react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <div
      className={`kl_accordion_item ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className={`kl_icon_container ${isActive ? "active" : ""}`}>
        <div className={`kl_stroke_one ${isActive ? "active" : ""}`}></div>
        <div className="kl_stroke_two"></div>
      </div>
      <h1 className="kl_accordion_tile">{title}</h1>
      <p className={`kl_accordion_content ${isActive ? "active" : ""}`}>
        {content}
      </p>
    </div>
  );
};

export default AccordionItem;
