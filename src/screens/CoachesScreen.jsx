import React from "react";
import { ContainerWrap } from "../components/Containers";
import Heading from "../components/Heading";
import blankProfile from "../assets/blankProfile.png";
import logo from "../assets/mttlogo.svg";

import { coaches } from "../data/data";

const CoachesScreen = () => {
  return (
    <ContainerWrap id="coaches" style="coaches section">
      <div className="d-flex flex-column justify-content-center">
        <div className="clear-top">
          <Heading title="Treneri" style="my-5" />
        </div>

        <div className="row g-3 g-lg-4">
          {coaches.map((item, key) => (
            <div key={key} className="col-12 col-md-6 col-lg-4 mx-auto">
              <div className="card shadow-lg text-white">
                <img src={blankProfile} className="card-img" alt="..." />
                <div className="card-img-overlay">
                  <div className="row">
                    <div className="col-6">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">
                        <small>{item.title}</small>
                      </p>
                    </div>
                    <div className="col-6 text-end">
                      <img src={logo} className="coaches_badgeLogo" alt="..." />
                    </div>
                  </div>

                  {/* <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerWrap>
  );
};

export default CoachesScreen;
