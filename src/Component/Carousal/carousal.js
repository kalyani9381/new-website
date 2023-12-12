import React, { useState } from "react";
import { CarouselItem } from "./carousalItem";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./carousal.css";

// import svg1 from "../../media/example1.svg";
// import svg2 from "../../media/example2.svg";
// import svg3 from "../../media/example3.svg";

// import timeImg from "../../assets/time.webp";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Baseball",
      description:
        "Time management is a technique for using your time productively and efficiently. It means organizing and planning how to divide your time between various tasks. You'll have time to do everything you need without being stressed out about it with good time management skills..",
      // icon: require("./../Media/example1.svg"),
      icon: "https://www.conovercompany.com/wp-content/uploads/2018/05/iStock_000010816901Small-800x535.jpg",
    },
    {
      title: "Walking",
      description:
        "Technical skills are the specialized knowledge and expertise required to perform specific tasks and use specific tools and programs in real world situations. Diverse technical skills are required in just about every field and industry, from IT and business administration to health care and education.. ",
      // icon: require("./Media/example2.svg"),
      icon: "https://media.licdn.com/dms/image/D5612AQF7aStX9gRCzg/article-cover_image-shrink_720_1280/0/1659105145153?e=2147483647&v=beta&t=9O2FNF3nBLpQ8Kaamaq4B9jE7Mn9VckDYuKxmrDUZBE",
    },
    {
      title: "Weights",
      description:
        "Decision-making skills show your ability to select the best possible option from the alternatives available. The ability to maintain good decisions helps contribute to the company's goal. The process involves using the information to assess the risk and opportunity associated with each choice.",
      // icon: require("./Media/example3.svg"),
      icon: "https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/bigstock-Young-Unsure-Man-Is-Making-Dec-239778739.jpg",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 2;
      console.log(newIndex);
    } else if (newIndex >= items.length) {
      newIndex = 0;
      console.log(newIndex);
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="kl_top_carousel">
      <h1 style={{ maxWidth: "380px", fontSize: "26px" }}>
        Explore proven ways to work more efficiently
      </h1>
      <div className="kl_carousel">
        <div
          className="kl_inner"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {items.map((item) => {
            return <CarouselItem item={item} width={"100%"} />;
          })}
        </div>
        <div className="kl_carousel-buttons">
          <button
            className="kl_button-arrow"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <AiOutlineArrowLeft style={{ fontSize: "19px" }} />
          </button>
          <div className="kl_indicators">
            {items.map((item, index) => {
              return (
                <button
                  className="kl_indicator-buttons"
                  key={index}
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <input
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "kl_indicator-symbol-active"
                        : "kl_indicator-symbol"
                    }`}
                    type="radio"
                    name="carousal"
                    checked={index === activeIndex}
                    readOnly
                  />
                </button>
              );
            })}
          </div>
          <button
            className="kl_button-arrow"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <span class="material-symbols-outlined">
              <AiOutlineArrowRight style={{ fontSize: "19px" }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
