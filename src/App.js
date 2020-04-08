//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./assets/css/App.css";
import TopRow from "./components/TopRow";
import BottomRow from "./components/BottomRow";
import Buttons from "./components/Buttons";

export default function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  function addScore(team, score) {
    if(team === "home") {
      setHomeScore(homeScore + score)
    } else {
      setAwayScore(awayScore + score)
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore = {homeScore} awayScore = {awayScore} />
        <BottomRow />
      </section>
      <section className="buttons">
        <Buttons divClass = "homeButtons" touchdown = {() => addScore("home", 7)} fieldGoal = {() => addScore("home", 3)} />
        <Buttons divClass = "awayButtons" touchdown = {() => addScore("away", 7)} fieldGoal = {() => addScore("away", 3)} />
      </section>
    </div>
  );
}
