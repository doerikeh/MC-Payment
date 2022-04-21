import Dashboard from "./views/Dashboard";
import UserProfile from "./views/UserProfile";
import {Routers} from './utils/UITypes/SideBars'

var routes:Routers[] = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: "tim-icons icon-chart-pie-36",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/user-profile",
      name: "User Profile",
      icon: "tim-icons icon-single-02",
      component: UserProfile,
      layout: "/admin",
    },
  ];
  export default routes;