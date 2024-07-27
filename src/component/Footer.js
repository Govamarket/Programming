import React from "react";
import { MdIconName } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsMic } from "react-icons/bs";
import { CiImageOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <section className="colum-1">
          <div className="upper-logo">
            <img src="./Group 1.png"></img>
            <br />
            <span>
              <img src="./Group 6.png"></img>
            </span>{" "}
            <br />
            <span className="text-su">
              <p>
                Lorem ipsum dolor sit ament <br />
                consectetur adispcing elit aliquam
              </p>
            </span>
            <br />
            <span className="icons-footer">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagramSquare />
              <FaLinkedinIn />
              <FaYoutube />
            </span>
          </div>
        </section>

        <section className="colum-1">
          <div className="footer-header">
            <p>Product</p>
          </div>{" "}
          <br />
          <ul>
            <li>Features</li>
            <li>Features</li>
            <li>Case studies</li>
            <li>Reviews</li>
            <li>Updates</li>
          </ul>
        </section>

        <section className="colum-1">
          <div className="footer-header">
            <p>Company</p>
          </div>{" "}
          <br />
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>Culture</li>
            <li>Blog</li>
          </ul>
        </section>
        <section className="colum-2">
        <div className="footer-header">
          <p>Support</p>
        </div>{" "}
        <br />
        <ul>
          <li>Getting started</li>
          <li>Help center</li>
          <li>Server status</li>
          <li>Report a bug</li>
          <li>Chat support</li>
        </ul>
      </section>

      <section className="colum-2">
        <div className="footer-header">
          <p>Contact us</p>
        </div>{" "}
        <br />
        <ul>
          <li className="flec">
            <span className="mail-con">
              <MdOutlineEmail />
            </span>
            contact@company.com
          </li>

          <li className="mob">
            <span className="mobile">
              <FaPhoneAlt />
            </span>
            (414)687-5892
          </li>

          <li className="location">
            <span className="gps-con">
              {" "}
              <CiLocationOn />
            </span>
            798 Macllister St San Francisco, 94102
          </li>
          <li>Reviews</li>
          <li>Updates</li>
        </ul>
      </section>
      </div>

      
      <section className="all-right">
        <p>
          © Copyright 2011-2021 www.dapplab.co All rights reserved. Developed by
          Wecode.
        </p>
      </section>
    </div>
  );
}

export default Footer;
