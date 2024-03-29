import React from "react";
import { ContainerFluid } from "../components/Containers";

const MapScreen = () => {
  return (
    <ContainerFluid style="px-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11777.705929111702!2d19.2846226!3d42.4399411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134deddf159cb57d%3A0xd0ee73c2fae27fc4!2sMontenegro%20Top%20Team%20-%20Jiu%20Jitsu%20(BJJ)%2C%20Judo%20%26%20MMA!5e0!3m2!1ssr!2s!4v1705744790397!5m2!1ssr!2s"
        width="100%"
        height="350"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </ContainerFluid>
  );
};

export default MapScreen;
