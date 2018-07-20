import React from "react";

/**************************************************************
 * Here we define the entire content on our dashboard component
 *************************************************************/
export default props => {
  return <section className="content">{props.children}</section>;
};
