import React from "react";

import MenuItem from "../template/menuItem";

/******************************
 * Here is we'll put menu items
 *****************************/
export default props => {
  return (
    <ul className="sidebar-menu">
      <MenuItem path="#/" label="Dashboard" icon="dashboard" />
    </ul>
  );
};
