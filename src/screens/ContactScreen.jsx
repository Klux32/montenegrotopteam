import React from "react";
import { ContainerWrap } from "../components/Containers";
import Heading from "../components/Heading";
// import ContactForm from "../components/ContactForm";
import contactImg from "../assets/hero-col.jpg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import { elements } from "../components/forms/formElements.jsx";
import Form from "../components/forms/form.jsx";

const ContactScreen = () => {
  return (
    <ContainerWrap id="contact" style="contact section">
      <div className="d-flex flex-column justify-content-center">
        <div className="clear-top">
          <Heading title="Get in touch" style="my-5" />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="d-flex mb-5 fs-1 align-items-center justify-content-start">
              <FaEnvelope />
            </div>
            <Form details={elements} />
            {/* <ContactForm /> */}
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="mb-5 mt-5 mt-lg-0">
              <div className="d-flex fs-1 mb-3">
                <FaSquarePhone />
              </div>
              <span className="">+382 67 648 984</span>
            </div>

            <div className="mb-5">
              <div className="d-flex fs-1 mb-3">
                <FaLocationDot />
              </div>
              <span className="mb-2 d-block">
                4 Medunska, Podgorica, Црна Гора
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.705929111702!2d19.2846226!3d42.4399411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deddf159cb57d%3A0xd0ee73c2fae27fc4!2sMontenegro%20Top%20Team%20-%20Jiu%20Jitsu%20(BJJ)%2C%20Judo%20%26%20MMA!5e0!3m2!1ssr!2s!4v1705744790397!5m2!1ssr!2s"
                width="100%"
                height="150"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="d-flex fs-1 mt-5 mb-3">
                <FaLocationDot />
              </div>
              <span className="my-2 d-block">
                Fortis Teretana, Danilovgrad, Црна Гора
              </span>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11757.548986915719!2d19.098739!3d42.5470695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134dbeac1fed0ba3%3A0x6ca36f1049bdfbe4!2sFortis%20Caffe!5e0!3m2!1ssr!2sba!4v1711598325594!5m2!1ssr!2sba"
                width="100%"
                height="150"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrap>
  );
};

export default ContactScreen;
