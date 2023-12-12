import React, { useState } from "react";
import AccordionItem from "./SecondFileItem";
import "./SecondFile.css";

const AccordionMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
    <div className="kl_accordion_menu">
      <h1 className="kl_title">FAQ</h1>
      <div className="kl_accordion_items">
        <AccordionItem
          title="What does BambooHR do?."
          content="BambooHR is HR software that collects and organizes all the information you gather throughout the employee life cycle, then helps you use it to achieve great things. Whether you're hiring, onboarding, preparing compensation, or building culture, BambooHR gives you the time and insights to focus on your most important asset your people."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <AccordionItem
          title="Does BambooHR do payroll?."
          content="Yes. BambooHR has its own add-on payroll solution that allows data to flow automatically, reducing the risk of double entry and making payroll runs quick and easy. In addition to seamless data flow, payroll customers also enjoy comprehensive payroll reporting, superior customer support, and full-service tax filing. Learn more by visiting the product page on the BambooHR website.."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <AccordionItem
          title="How much does BambooHR cost?."
          content="BambooHR pricing varies depending on the number of employees at your organization and the features you select. To get a free price quote, call 1-866-387-9595 or visit our pricing page.."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
        <AccordionItem
          title="How many countries is BambooHR in?"
          content="BambooHR is based in the United States and serves customers in over 120 countries."
          isActive={currentlyActive === 4}
          onClick={() => handleAccordionClick(4)}
        />
        <AccordionItem
          title="Is your support team outsourced?"
          content="No, our support team "
          isActive={currentlyActive === 5}
          onClick={() => handleAccordionClick(5)}
        />
      </div>
    </div>
  );
};

export default AccordionMenu;
