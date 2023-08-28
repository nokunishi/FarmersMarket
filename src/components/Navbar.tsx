import { Container, Nav, Navbar as NavbarBs, Button} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
      <>
        <NavbarBs className="bg-white shadow-sm mb-3" sticky="top">
          <Container>
            <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>
                {" "}
                Home{" "}
              </Nav.Link>
              <Nav.Link to="/store" as={NavLink}>
                {" "}
                Store{" "}
              </Nav.Link>
              <Nav.Link to="/about" as={NavLink}>
                {" "}
                About{" "}
              </Nav.Link>
            </Nav>
            <Button
              variant="outline-primary"
              className="rounded-circle"
              style={{ width: "4rem", height: "3rem", position: "relative" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1200"
                style={{ width: "90px", height: "90px", position: "relative" }}
              >
                <path
                  fill="#C23F37"
                  d="M465.57 182.896L449.973 379.5c-.422 5.403-4.483 9.897-9.903 9.897H71.927c-5.423 0-9.474-4.473-9.9-9.897L46.421 182.896H465.57z"
                />
                <path
                  fill="#333"
                  d="M90.794 114.531L186.151 7.712c8.488-9.505 23.191-10.339 32.692-1.861v.01c9.515 8.481 10.339 23.2 1.858 32.702l-67.803 75.968H90.794zm270.03 0l-67.817-75.968c-8.487-9.502-7.653-24.221 1.851-32.702h.011c9.501-8.488 24.21-7.654 32.701 1.851l95.354 106.819h-62.1z"
                />
                <path
                  fill="#721E19"
                  d="M148.969 214.449h43.76v126.523l-43.76.003V214.449zm85.15 0h43.749v126.523l-43.749.003V214.449zm85.146 0h43.759v126.523l-43.759.003V214.449z"
                />
                <path
                  fill="#E15240"
                  d="M13.725 114.349h484.55c7.55 0 
13.725 6.178 13.725 13.725v41.183c0 7.547-6.178 13.726-13.725 13.726H13.725C6.178 182.983 0 176.808 0 169.257v-41.183c0-7.55 6.175-13.725 13.725-13.725z"
                />
              </svg>
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate{30%, 30%}",
                }}
              >
                3
              </div>
            </Button>
          </Container>
        </NavbarBs>
      </>
    );}