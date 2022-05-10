import React from "react";

//Components
import DashboardHeader from "./components/DashboardHeader";
import DashoboardOrders from "./components/DashoboardOrders";
import DashboardBank from "./components/DashboardBank";
import DashboardFavorte from "./components/DashboardFavorte";
import DashboardAddress from "./components/DashboardAddress";

//Styles
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="row">
        <DashoboardOrders />
        <DashboardFavorte />
      </div>
      <div className="row">
        <DashboardBank />
        <DashboardAddress />
      </div>
    </div>
  );
};

export default Dashboard;
