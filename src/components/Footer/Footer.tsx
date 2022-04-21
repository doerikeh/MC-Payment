import React from "react";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

export function Footer() {
  return (
    <footer>
      <Container>
        <Nav>
          <NavItem>
            <NavLink>Firdaus Alfajar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Blog</NavLink>
          </NavItem>
        </Nav>
        <div>
          © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.creative-tim.com/?ref=bdr-user-archive-footer"
            target="_blank"
          >
            Firdaus Alfajar
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}
