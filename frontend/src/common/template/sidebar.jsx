import React from "react";
import Menu from "./menu";

/**********************************************
 * Here we have the main sidebar on left
 * And inside it we have the first menu section
 *********************************************/
export default props => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <Menu />
      </section>
    </aside>
  );
};
