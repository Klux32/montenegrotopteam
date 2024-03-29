import React from "react";
import { Container } from "react-bootstrap";

const ContainerWrap = ({ children, style, id }) => {
  return (
    <Container className={`p-4 ${style}`} id={id}>
      {children}
    </Container>
  );
};

const ContainerFluid = ({ children, style, id }) => {
  return (
    <Container className={`${style}`} id={id} fluid>
      {children}
    </Container>
  );
};

export { ContainerWrap, ContainerFluid };
