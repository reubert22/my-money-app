import React, { Component } from "react";

/************************************************
 * This component is responsible of get parameter
 * and build our responsivity
 ***********************************************/
export default class Grid extends Component {
  toCssClass(numbers: number) {
    const cols = numbers ? numbers.split(" ") : [];
    let col = "";

    if (cols[0]) {
      col += `col-xs-${cols[0]}`;
    }
    if (cols[1]) {
      col += `col-sm-${cols[1]}`;
    }
    if (cols[2]) {
      col += `col-md-${cols[2]}`;
    }
    if (cols[3]) {
      col += `col-lg-${cols[3]}`;
    }

    return col;
  }

  render() {
    const gridClass = this.toCssClass(this.props.cols || "12");
    return <div className={gridClass}>{this.props.children}</div>;
  }
}
