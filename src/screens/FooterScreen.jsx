import React from "react";
import { ContainerFluid } from "../components/Containers";

const FooterScreen = () => {
  return (
    <ContainerFluid style="text-bg-dark clear-top">
      <div className="row">
        <div className="col-6">Left Side</div>
        <div className="col-6">Right Side</div>
      </div>
    </ContainerFluid>
  );
};


export default FooterScreen;