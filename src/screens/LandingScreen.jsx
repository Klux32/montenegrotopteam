import React from "react";
import { Button } from "react-bootstrap";
import { ContainerFluid, ContainerWrap } from "../components/Containers";
const LandingScreen = () => {
  return (
    <ContainerFluid style="landing section" id="home">
      <div className="landing__hero"></div>
      <ContainerWrap style="landing__container d-flex justify-content-center align-items-center">
        <div className="landing__lead p-4 p-md-5 text-white shadow-lg rounded-3">
          <h1 className="fw-bold landing__lead-heading text-gradient-yellow-darkYellow">
            Montenegro Top Team
          </h1>
          <p className="text-white text-uppercase mt-4">
            Škola u kojoj ćete naučiti najsavremenije stilove borenja
          </p>
          <p className="text-white">BJJ - JUDO - MMA</p>
          <Button
            variant=""
            className="mt-4 btn btn-outline-warning btn-lg shadow"
          >
            Saznaj više
          </Button>
        </div>
      </ContainerWrap>
    </ContainerFluid>
  );
};

export default LandingScreen;
