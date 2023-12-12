import React from "react";
import "./Hrtabs.css";

const Hrtabs = () => {
  return (
    <div>
      <div className="kl_hrtabs">
        <div className="kl_hrheading">
          <h1>Choose the HRIS that requires less IT Oversight</h1>
          <div>
            <img
              className="kl_hrimages-sm"
              src="https://www.bamboohr.com/hr-solutions/media_1e1f2eb0aec30903baa84f64f2aa1ddda0e62cd9a.png?width=2000&format=webply&optimize=medium"
            />
          </div>
          <p>
            From our hands-on implementation program to the interface and
            self-service features, we ensure every interaction is
            approachable—so IT fields fewer questions and your organization
            sheds the drag of double entry, outdated routines, and risk-prone
            file management.
          </p>
          <span>Product highlights:</span>
          <p></p>
          <li>Workflows and Approvals</li>
          <li>Consolidated tech stack</li>
          <li>Employee self-service</li>
          <li>Single source of data</li>
        </div>
        <div>
          <img
            className="kl_hrimages"
            src="https://www.bamboohr.com/hr-solutions/media_1e1f2eb0aec30903baa84f64f2aa1ddda0e62cd9a.png?width=2000&format=webply&optimize=medium"
          />
        </div>
      </div>
    </div>
  );
};

export default Hrtabs;
