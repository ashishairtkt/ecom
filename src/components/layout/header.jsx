import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import { getUserDetails } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/Login", { replace: true });
  };

  useEffect(() => {
    setUserInfo(getUserDetails());
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="sticky-top header"
    >
      <Container fluid>
        <Navbar.Brand href="#home" style={{ width: "150px" }}>
          <Image
            src={`https://assets.maccarianagency.com/the-front/logos/logo.svg`}
            alt="logo"
            fluid
          />
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                active={activeLink === "home"}
                onClick={() => handleNavLinkClick("home")}
                className="m-1"
              >
                HOME
              </Nav.Link>
              <Nav.Link
                active={activeLink === "new-arrival"}
                onClick={() => handleNavLinkClick("new-arrival")}
                className="m-1"
              >
                NEW ARRIVAL
              </Nav.Link>
              <NavDropdown
                title="COLLECTIONS"
                id="collapsible-nav-dropdown"
                active={activeLink === "collections"}
                onSelect={() => handleNavLinkClick("collections")}
                className="m-1"
              >
                <NavDropdown.Item href="#men">MEN</NavDropdown.Item>
                <NavDropdown.Item href="#women">WOMEN</NavDropdown.Item>
                <NavDropdown.Item href="#kids">KIDS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#electronics">
                  ELECTRONICS
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="side_links">
              <Nav.Link href="#favorites">
                <FaHeart />
              </Nav.Link>
              <Nav.Link href="#cart">
                <FaShoppingCart />
              </Nav.Link>
              <NavDropdown
                alignright="true"
                title={<FaUser />}
                id="user-dropdown"
              >
                {userInfo !== null ? (
                  <>
                    {" "}
                    <NavDropdown.Item>Hello {userInfo?.name}</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#settings">
                      Settings
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item
                      onClick={() => navigate("/Login", { replace: true })}
                    >
                      Login
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Container>
    </Navbar>
  );
}

export default Header;
