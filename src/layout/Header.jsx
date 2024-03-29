import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import Logo from "../assets/mttlogo.svg";

import { navShrink } from "../../utils/ShrinkNav";

const Header = () => {
  window.onscroll = function () {
    navShrink();
  };

  // const clickHandle = (id) => {
  //   console.log("klik");
  //   const element = document.getElementById(id);
  //   // console.log(element.offsetTop - 78.125);
  //   window.scrollTo(0, parseInt(element.offsetTop) - 78.125);
  //   // element.scrollBy(0, (element.offsetTop = -78.125));
  //   // console.log(document.documentElement.scrollBy(0, -45));
  //   // document.documentElement.scrollBy(0, -45);
  //   // window.scrollBy(
  //   // (document.body.scrollTop || document.documentElement.scrollTop) - 78.125,
  //   //   50
  //   // );
  // };

  return (
    <div className="navWrap">
      <Navbar
        id="navbar"
        expand={"xl"}
        className="pt-3 pb-0 d-flex flex-column"
        data-bs-theme="light"
      >
        <Container fluid className="px-5">
          <Navbar.Brand href="#">
            <img id="logo" src={Logo} alt="Logo" className="navbar__logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"xl"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"xl"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"xl"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"xl"}`}>
                <h3 class="fw-bold m-0 text-gradient-yellow-darkYellow">
                  Montenegro Top Team
                </h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                id="navBody"
                className="justify-content-start ps-lg-5 flex-grow-1 pe-3"
              >
                <Nav.Link href="#home" className="home active">
                  Home
                </Nav.Link>
                <Nav.Link href="#about" className="about">
                  O nama
                </Nav.Link>
                <Nav.Link href="#programs" className="programs">
                  Programi
                </Nav.Link>
                <Nav.Link href="#schedule" className="schedule">
                  Raspored
                </Nav.Link>
                <Nav.Link href="#coaches" className="coaches">
                  Naš Tim
                </Nav.Link>
                <Nav.Link href="#faq" className="faq">
                  FAQ
                </Nav.Link>
                <Nav.Link href="#contact" className="contact">
                  Kontakt
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
        <div
          id="scrollProgress"
          className="navbar__progress mt-3 align-self-start"
        ></div>
      </Navbar>
    </div>
  );
};

export default Header;
