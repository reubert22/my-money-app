import React from "react";

/**********************************************************
 * Here is where we define the title of dashboard component
 * props we have on dashboard
 *********************************************************/
export default props => {
  return (
    <section className="content-header">
      <h1>
        {props.title}
        <small>{props.small}</small>
      </h1>
    </section>
  );
};
