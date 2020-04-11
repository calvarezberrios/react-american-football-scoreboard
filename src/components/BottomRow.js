import React, { useState, } from "react";
import "../assets/css/App.css";


export default function BottomRow(props) {
  const [quarter, setQuarter] = useState(1); 
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [yards, setYards] = useState(50);

  function addQuarter() {
    if (quarter < 4) {
      setQuarter(quarter + 1);
      props.setTimer(10);
    }
    
  }

  function changeDown(direction) {
    if(direction === "up") {
      if(down < 4) {
        setDown(down + 1);
      } 
    } else {
      if(down > 1) {
        setDown(down - 1);
      } 
    }
  } 

  function yardsToGo(direction) {
    if(direction === "down") {
      if(toGo > 0) {
        setToGo(toGo - 1);
      } else if (toGo === 0) {
        setDown(1);
        setToGo(10)
      }
    } else {
      if(toGo < 40) {
        setToGo(toGo + 1);
      } 
    }

  }

  function changeYards(direction) {
    if(direction === "up") {
      if(yards < 50) {
        setYards(yards + 1);
      } 
    } else {
      if(yards > 1) {
        setYards(yards - 1);
      } 
    }
  }

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <div>
          <button onClick = {() => changeDown("down")}>-</button>
          <button onClick = {() => changeDown("up")}>+</button>
        </div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
        <div>
          <button onClick = {() => yardsToGo("down")}>-</button>
          <button onClick = {() => yardsToGo("up")}>+</button>
        </div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{yards}</div>
        <div>
          <button onClick = {() => changeYards("down")}>-</button>
          <button onClick = {() => changeYards("up")}>+</button>
        </div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick = {addQuarter}>+</button>
      </div>
    </div>
  );
};
