import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import PerfectScrollbar from "perfect-scrollbar";
import { SectionNavbar } from "../components/Navbars/Navbar";
import { SideBars } from "../components/Sidebar/SideBars";
import BackgroundColorContext from "../contexts/BackgroundColorContext";
import { Routers } from "../utils/UITypes/SideBars";
// import logo from "../assets/img/react-logo.png";
import routes from "../routes";

var ps: any;

export default function HomeBase() {
  const location = useLocation();
  const mainPanelRef = React.useRef<any>(null);
  const [sidebarOpened, setsidebarOpened] = React.useState(
    document.documentElement.className.indexOf("nav-open") !== -1
  );

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(mainPanelRef.current, {
        suppressScrollX: true,
      });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.classList.add("perfect-scrollbar-off");
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
    };
  });

  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    if (mainPanelRef.current) {
      mainPanelRef.current.scrollTop = 0;
    }
  }, [location]);
  const toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    setsidebarOpened(!sidebarOpened);
  };
  const getRoutes = (routes: Routers[]) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const getBrandText = (path: any) => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  return (
    <BackgroundColorContext.Consumer>
      {({ color, changeColor }) => (
        <React.Fragment>
          <div>
            <SideBars
              router={routes}
              Logo={{ imgSrc: "../assets/img/react-logo.png", text: "Creative Tim" }}
              toggleSidebar={toggleSidebar}
            />
            <div>
              <SectionNavbar
                brandText={getBrandText(location.pathname)}
                toggleSidebar={toggleSidebar}
                sidebarOpened={sidebarOpened}
              />
              <Switch>
                {getRoutes(routes)}
                <Redirect from="*" to="/admin/dashboard" />
              </Switch>
              <Footer />
              {/* <Footer fluid /> */}
            </div>
          </div>
        </React.Fragment>
      )}
    </BackgroundColorContext.Consumer>
  );
}
