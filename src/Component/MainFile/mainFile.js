import React from "react";
import "./mainFile.css";
import { FaBeer } from "react-icons/fa";

import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { LuAlarmClock } from "react-icons/lu";
import { BiSolidDonateBlood } from "react-icons/bi";
import { Carousel } from "../Carousal/carousal";
import AccordionMenu from "../SecondFile/SecondFile";
import Animations from "../Animations/Animations";
import Hrtabs from "../Hrtabs/Hrtabs";
import Hrpages from "../Hrpages/Hrpages";
import YourComponent from "../Scrollpage/Scrollpage";

const Header = () => {
  return (
    <div className="kl_top">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: "1100px" }}>
          <div className="kl_container">
            <div className="kl_left_container">
              <span>HR,Payroll,Benifits.The Complete HR Software.</span>
              <p className="kl_paragraph">
                Simplify HR with award-winning solutions for everything from
                hire to retire.
              </p>
              <input placeholder="Enter your Email" className="kl_input" />
            </div>
            <div className="kl_right_container">
              <img
                src={
                  "https://www.bamboohr.com/media_1696a7c6e712d8189262ac2a9d4e0ba3ff0b737be.png?width=2000&format=webply&optimize=medium"
                }
              />
            </div>
          </div>
          <div className="Scrollpage">
            <YourComponent />
          </div>
          <div className="kl_card_container">
            <div className="kl_cards">
              <h className="kl_heading">PRODUCT ANNOUNCEMENT</h>
              <img src="https://connecteam.com/wp-content/uploads/2023/09/home-resources-4-1.jpg" />
              <p className="kl_paragraph_p">
                Say Hello to Benifits Administration.
              </p>
              <button className="kl_button_btn">Learn More</button>
            </div>

            <div className="kl_cards">
              <h className="kl_heading">WEEKLY DEMO WEBINAR</h>
              <img src="https://connecteam.com/wp-content/uploads/2023/10/home-resources-1.jpg" />
              <p className="kl_paragraph_p">
                Join us for overview of Hr features.
              </p>
              <button className="kl_button_btn">Sign Up</button>
            </div>
          </div>
          <div className="kl_containers">
            <h1 className="kl_headings">
              Combine all your HR systems into one Platform
            </h1>
            <div className="kl_bottom_containers">
              <h1 className="kl_paragraphes">
                HR Customers save hundreds of hours and reduce HR costs by 40%.
              </h1>

              <div className="kl_cards_const">
                <div class="kl_card">
                  <p class="kl_small_desc">
                    Saved$20,000 annually and 20 hours a week with HR Payroll
                    and management system.
                  </p>
                  <div class="kl_go_corner">
                    <div class="kl_go_arrow">→</div>
                  </div>
                </div>
                <div class="kl_card">
                  <p class="kl_small_desc">
                    Saved$20,000 annually and hundreds of hours with Benifits
                    and HR perfomance management.
                  </p>
                  <div class="kl_go_corner">
                    <div class="kl_go_arrow">→</div>
                  </div>
                </div>

                <div class="kl_card">
                  <p class="kl_small_desc">
                    Shortend a 3 week benifits admin process into just 2 days
                    with HR Benifits Administration.
                  </p>
                  <div class="kl_go_corner">
                    <div class="kl_go_arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kl_buttons_container">
              <button className="kl_btns">Get a Demo</button>
              <button className="kl_btns">See More</button>
            </div>
          </div>
          <div className="kl_bottom_container">
            <h1 className="kl_headings_h">Hear From Our Customers</h1>
            <p className="kl_paragraphs">
              "HR Changed the way HR Delivers value to the Business.we can now
              collaborate with other departments and be secure in metrics like
              headcount,payrate and PTO accrual."
            </p>
          </div>
          <div className="md_container">
            <div class="md_card">
              <div className="md_imgs">
                <img
                  className="md_image"
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/trust.png"
                />
                <span className="md_spans">
                  Voted Best feature set,Relationship and Value.
                </span>
                <p className="md_description">
                  "This is the best no-code Platform I never seen."
                </p>
              </div>
            </div>
            <div class="md_card">
              <div className="md_imgs">
                <img
                  className="md_image"
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/capterra.png"
                />
                <span className="md_spans">
                  Shortlisted in over 8 software categories.
                </span>
                <p className="md_description">
                  "The perfect organizer and Team builder."
                </p>
              </div>
            </div>
            <div class="md_card">
              <div className="md_imgs">
                <img
                  className="md_image"
                  src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/g2.png"
                />
                <span className="md_spans">
                  Market leader across 18 categories.
                </span>
                <p className="md_description">
                  "Flexible product with near endless possibilities."
                </p>
              </div>
            </div>
          </div>
          <div className="bt_container">
            <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png" />
            <div className="kl_bt_container">
              <h1 className="bt_heading">
                Supporting your growth every step of the way
              </h1>
              <p className="bt_paragraph">
                Our support superheroes are a click away to help you get the
                most out so you can focus on working without limits.
              </p>
              <div className="kl_bt_icons">
                <div className="bt_icons">
                  <FiPhone
                    style={{
                      fontSize: "38px",
                      width: "65px",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      24/7
                    </span>
                    <br />
                    <span style={{ fontSize: "18px", fontFamily: "Roboto" }}>
                      Support anytime,anywhere.
                    </span>
                  </div>
                </div>
                <div className="bt_icons">
                  <BiSolidDonateBlood
                    style={{ fontsize: "38px", width: "65px" }}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      Voted
                    </span>
                    <br />
                    <span
                      style={{
                        fontSize: "18px",
                        fontFamily: "Roboto",
                      }}
                    >
                      Most Loved by Customers on Products.
                    </span>
                  </div>
                </div>
                <div className="bt_icons">
                  <LuAlarmClock
                    style={{
                      fontSize: "38px",
                      width: "65px",
                    }}
                  />
                  <div>
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    >
                      2 Hours
                    </span>
                    <br />
                    <span style={{ fontSize: "18px", fontFamily: "Roboto" }}>
                      Average Responsive Time.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kl_Carousal">
        <Carousel />
      </div>
      {/* <div className="">
        <Animations />
      </div> */}
      <div className="kl_hrtabs">
        <Hrtabs />
      </div>
      <div className="kl_hrcontainer">
        <Hrpages />
      </div>
      <div className="">
        <AccordionMenu />
      </div>
      <footer>
        <div className="container">
          <div className="sec aboutus">
            <h2>About Us</h2>
            <p>
              HR Changed the way HR Delivers value to the Business.we can now
              collaborate with other departments and be secure in matrics like
              headcount,payrate and PTO accrual.
            </p>
            <ul className="sci" style={{ margin: "0", padding: "0" }}>
              <li>
                <a href="#">
                  <i>
                    <AiFillFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <AiFillTwitterCircle />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <AiFillInstagram />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <GrYoutube />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Support</h2>
            <ul style={{ margin: "0", padding: "0" }}>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="sec quicklinks">
            <h2>Shop</h2>
            <ul style={{ margin: "0", padding: "0" }}>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info" style={{ margin: "0", padding: "0" }}>
              <li>
                <span>
                  <i>
                    <span>
                      <IoIosCall />
                    </span>
                    <a href="tel:919876543212">+919876543212</a>
                  </i>
                </span>
              </li>
              <li>
                <span>
                  <i>
                    <AiOutlineMail />
                    <a href="mailto:">businesslikeglobal.com</a>
                  </i>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright 2023 Businesslike</p>
      </div>
    </div>
  );
};

export default Header;
