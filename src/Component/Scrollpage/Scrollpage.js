import React, { useEffect } from "react";
import "./Scrollpage.css"; // Import your CSS file

const YourComponent = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".kl_scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".kl_scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center ",
      }}
    >
      <h1 style={{ textAlign: "center", color: "green" }}>
        HR Softeare Companies
      </h1>

      {/* <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
        </ul>
      </div> */}

      <div className="kl_scroller" data-direction="left" data-speed="fast">
        <div className="kl_scroller__inner">
          <img
            src="https://www.bamboohr.com/assets/partner-logos/ziprecruiter.svg?width=250&format=webply&optimize=medium=1"
            alt=""
          />
          <img
            src="https://www.bamboohr.com/assets/partner-logos/change-org.svg?width=250&format=webply&optimize=medium=2"
            alt=""
          />
          <img
            src="https://www.orangehrm.com/assets/Uploads/Advanced-client-logo-/9-toluna-logo.webp=3"
            alt=""
          />
          <img
            src="https://www.bamboohr.com/assets/partner-logos/usertesting.svg?width=250&format=webply&optimize=medium=4"
            alt=""
          />
          <img
            src="https://www.bamboohr.com/assets/partner-logos/postmates.svg?width=250&format=webply&optimize=medium=5"
            alt=""
          />
          <img
            src="https://www.bamboohr.com/assets/partner-logos/soundcloud.svg?width=250&format=webply&optimize=medium=6"
            alt=""
          />
          <img
            src="https://www.orangehrm.com/assets/Uploads/Advanced-client-logo-/8-TCL.webp=7"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default YourComponent;

/* <a className="yt" href="https://youtu.be/pKHKQwAsZLI">
        Watch the tutorial
      </a> */
