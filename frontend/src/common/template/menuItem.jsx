import React from "react";

/*********************************************************
 * Here is our first menu item
 * 'props' are from super
 * in that case, they'll set when render on menu component
 ********************************************************/
export default props => {
  return (
    <li>
      <a href={props.path}>
        <i className={`fa fa-${props.icon}`} /> {props.label}
      </a>
    </li>
  );
};
