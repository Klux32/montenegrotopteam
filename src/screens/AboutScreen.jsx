import React, { useEffect } from "react";
import { ContainerWrap } from "../components/Containers";
import Heading from "../components/Heading";
import logo from "../assets/mttlogo.svg";
import elipse from "../assets/elipse.svg";
import blueDot from "../assets/blueDot.svg";
import darkDot from "../assets/darkDot.svg";
import orangeDot from "../assets/orangeDot.svg";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { RotateDots } from "../../utils/RotateDots";

const AboutScreen = () => {
  useEffect(() => {
    RotateDots("orangeDot", 110);
    RotateDots("blueDot", 90);
    RotateDots("darkDot", 60);
  }, [RotateDots]);

  const percentage = 86;
  return (
    <ContainerWrap style="about section" id="about">
      <div className="d-flex flex-column justify-content-center h-100">
        <div className="clear-top">
          <Heading title="O nama" style="my-5" />
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex">
            <p className="my-auto">
              Dobrodošli u svijet borilačkih umjetnosti, samoodbrane, fizičke
              kondicije i mentalne snage! Naša zajednica je posvećena pružanju
              vrhunskog iskustva u učenju i treniranju borilačkih vještina.
              Pridružite nam se danas i započnite svoje putovanje ka jačem
              tijelu, snažnijem umu i boljem životu kroz borilačke sportove!
            </p>
          </div>
          <div className="about__right col-12 col-lg-6 mt-5 mt-lg-0 p-5 rounded-3 shadow-lg">
            <div className="about__logoAnim mb-5">
              <img src={logo} className="about__logo"></img>
              <img src={elipse} className="about__elipse"></img>
              <img
                src={orangeDot}
                id="orangeDot"
                className="about__orange"
              ></img>
              <img src={blueDot} id="blueDot" className="about__blue"></img>
              <img src={darkDot} id="darkDot" className="about__dark"></img>
            </div>
            <div className="row">
              <div className="col">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                    textColor: "#FFF",
                    trailColor: "transparent",
                    backgroundColor: "#FFF",
                  })}
                />
              </div>

              <div className="col">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                    textColor: "#FFF",
                    trailColor: "transparent",
                    backgroundColor: "#FFF",
                  })}
                />
              </div>

              <div className="col">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                    textColor: "#FFF",
                    trailColor: "transparent",
                    backgroundColor: "#FFF",
                  })}
                />
              </div>

              <div className="col">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    pathColor: `rgba(255, 255, 255, ${percentage / 100})`,
                    textColor: "#FFF",
                    trailColor: "transparent",
                    backgroundColor: "#FFF",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerWrap>
  );
};

export default AboutScreen;
