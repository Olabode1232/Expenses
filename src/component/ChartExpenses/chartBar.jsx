import React, { Component } from "react";
import "./chartBar.css";

function ChartBar(props) {
    let barFillHeight = "0%";
    if (props.max > 0){
        barFillHeight = Math.random((props.value / props.maxValue) * 100) + "%"
    }
  return (
    <div className="chartBar">
      <div className="chartBarInner">
        <div className="chartBarFill" style={{height: barFillHeight}}></div>
      </div>
      <div className="chartBarLabel"></div>
    </div>
  );
}

export default ChartBar;
