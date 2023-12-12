import React, { useState } from "react";
import "./Animations.css";

import { FaBeer } from "react-icons/fa";
import { IoMdClipboard } from "react-icons/io";
import { CiViewColumn } from "react-icons/ci";
import { TiClipboard } from "react-icons/ti";
import { FaPlug } from "react-icons/fa";
import { TbBatteryAutomotive } from "react-icons/tb";
import { GrAppsRounded } from "react-icons/gr";
import { GrDocumentDownload } from "react-icons/gr";

const Animations = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };
  return (
    <div>
      <div className="kl_wrapper">
        {/* <header>Pure CSS Tabs</header> */}
        {["home", "contact", "code", "help", "about"].map((tabId) => (
          <input
            key={tabId}
            type="radio"
            name="slider"
            className="kl_tabs_input"
            id={tabId}
            checked={selectedTab === tabId}
            onChange={() => handleTabChange(tabId)}
          />
        ))}
        <nav>
          <label for="home" className="home">
            <i>
              <IoMdClipboard />
            </i>
            Home
          </label>
          <label for="contact" className="contact">
            <i>
              <CiViewColumn />
            </i>
            Contact
          </label>
          <label for="code" className="code">
            <i>
              <TiClipboard />
            </i>
            Code
          </label>
          <label for="help" className="help">
            <i>
              <FaPlug />
            </i>
            Help
          </label>
          <label for="about" className="about">
            <i>
              <TbBatteryAutomotive />
            </i>
            About
          </label>
          <div className="slider"></div>
        </nav>
        <section>
          <div className="kl_content kl_content_1">
            <div className="kl_titles">This is a Home Content</div>
            <p>
              Visualize and plan your work more efficiently with multiple views:
              Kanban board, calendar, timeline, Gantt chart, and more.
            </p>
          </div>
          <div className="kl_content kl_content_2">
            <div className="kl_titles">This is a Contact Content</div>
            <p>
              Connect with all your favorite tools and get more work done.
              Integrate Slack, Dropbox, Adobe Creative Cloud, and more contacts.
            </p>
          </div>
          <div className="kl_content kl_content_3">
            <div className="kl_titles">This is a Code Content</div>
            <p>
              Get the insights you need to make decisions with confidence. Keep
              track of progress, timelines, and budgets with custom code.
            </p>
          </div>
          <div className="kl_content kl_content_4">
            <div className="kl_titles">This is a Help Content</div>
            <p>
              Streamline processes to focus on the work that matters. Choose
              from a variety of automation recipes or create your own in minutes
              help.
            </p>
          </div>
          <div className="kl_content kl_content_5">
            <div className="kl_titles">This is a About Content</div>
            <p>
              Expand the capabilities of your Work OS with monday apps, Enhance
              your workflows with custom views, widgets, integrations, and more.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Animations;
