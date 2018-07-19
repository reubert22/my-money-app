import React from "react";

export default props => {
  return (
    <li className="treeview">
      <a href>
        <i className={`fa fa-${props.icon}`} /> {props.label}
        <i className="fa fa-angle-down pull-right" />
      </a>
      <ul className="treeview-menu">{props.children}</ul>
    </li>
  );
};
