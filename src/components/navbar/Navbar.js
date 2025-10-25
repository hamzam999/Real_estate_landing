import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import WalletConnect from "../walletConnect/index";
import { useTheme } from "../../context/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar
      expand="lg"
      className="py-3"
    >
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{
              filter:
                theme === "light"
                  ? "invert(1)"
                  : "none",
              transition: "filter 0.3s ease",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="border-0"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1" className="nav-link">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3 nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3" className="nav-link">Developers</Nav.Link>
          </Nav>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>
        </div>
            <WalletConnect /> 
              </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
