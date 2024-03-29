import React from "react";
import { ContainerWrap } from "../components/Containers";
import Heading from "../components/Heading";
import FaqAuto from "../components/FaqAuto";
import FaqManual from "../components/FaqManual";
import questionDiamond from "../assets/questionDiamond.svg";

const FAQScreen = () => {
  return (
    <ContainerWrap id="faq" style="faq section">
      <div className="d-flex flex-column justify-content-center">
        <div className="clear-top">
          <Heading title="FAQ" style="my-5" />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 faq_left text-center">
            <img
              className="h-100 rounded-3 shadow-lg"
              src={questionDiamond}
              alt=""
            />
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <FaqManual />
          </div>
        </div>
      </div>
    </ContainerWrap>
  );
};

export default FAQScreen;
