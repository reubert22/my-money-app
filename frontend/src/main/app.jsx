import React from "react";

import Header from "../common/template/header";
import Sidebar from "../common/template/sidebar";
import "../common/template/dependencies";

/*********************************************
 * Here we imported two components
 * each other has their subcomponents
 * so the 1st is our header and 2nd is sidebar
 ********************************************/
export default props => {
  return (
    <div className="wrapper">
      <Header />
      <Sidebar />
    </div>
  );
};
