import React from "react";

/***************************************************************************
 * Our header component
 * according with our logo-mini and logo-lg we define what will be displayed
 **************************************************************************/
export default props => {
  return (
    <header className="main-header">
      <a href="/#/" className="logo">
        <span className="logo-mini">
          <b>My</b>
        </span>
        <i className="logo-lg" />
        <b>My</b>Money
      </a>
      <nav className="navbar navbar-static-top">
        <a href="" className="sidebar-toggle" data-toggle="offcanvas" />
      </nav>
    </header>
  );
};
