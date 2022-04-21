import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import { SideBar } from "../../utils";
import BackgroundColorContext from "../../contexts/BackgroundColorContext";
import { SideBarsData } from "./SideBarsData";

var ps: any;

export function SideBars({ router, Logo, redirect, icon, name, toggleSidebar }: SideBar) {
  const location = useLocation();
  const sidebarRef = React.useRef<any>(null);
  const active = (routeName: string) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebarRef.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  let logoImg: any = null;
  let logoText: any = null;
  // const { router, Logo, redirect, icon, name, onClick } = sidebars;
  if (Logo !== undefined) {
    if (Logo.outerLink !== undefined) {
      logoImg = (
        <a href={Logo.outerLink} target="_blank" onClick={toggleSidebar}>
          <div>
            <img src={Logo.imgSrc} alt="" />
          </div>
        </a>
      );
      logoText = (
        <a href={Logo.outerLink} target="_blank" onClick={toggleSidebar}>
          {Logo.text}
        </a>
      );
    } else {
      logoImg = (
        <Link to={Logo.innerLink} onClick={toggleSidebar}>
          <div>
            <img src={Logo.imgSrc} alt="" />
          </div>
        </Link>
      );
      logoText = (
        <Link to={Logo.innerLink} onClick={toggleSidebar}>
          {Logo.text}
        </Link>
      );
    }
  }
  return (
    <BackgroundColorContext.Consumer>
      {({ color }) => (
        <SideBarsData data={color}>
          <div className="" ref={sidebarRef}>
            {logoImg !== null || logoText !== null ? (
              <div>
                {logoImg}
                {logoText}
              </div>
            ) : null}
            <Nav>
              {router.map((route, index) => {
                if (redirect) return null;
                return (
                  <li className="" key={index}>
                    <NavLink
                      to={route.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={icon}></i>
                      <p>{name}</p>
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <ReactstrapNavLink>
                  <i className="fa fa-sign-out"></i>
                </ReactstrapNavLink>
              </li>
            </Nav>
          </div>
        </SideBarsData>
      )}
    </BackgroundColorContext.Consumer>
  );
}
