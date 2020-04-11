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
  const [timer, setTimer] = useState(0); 

  /*
  Function addScore takes two parameters (team, score) and adds the
  score to the team state using the setter state function
  @param team - holds either "home" or "away" to determine which
                team to add the score to
  @param score - holds the amount to be added to the score state
  */
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
        <TopRow homeScore = {homeScore} awayScore = {awayScore} timer = {timer} setTimer = {setTimer} />
        <BottomRow setTimer = {setTimer} />
      </section>
      <section className="buttons">
        <Buttons team = "Home" touchdown = {() => addScore("home", 7)} fieldGoal = {() => addScore("home", 3)} />
        <Buttons team = "Away" touchdown = {() => addScore("away", 7)} fieldGoal = {() => addScore("away", 3)} />
      </section>
    </div>
  );
}
