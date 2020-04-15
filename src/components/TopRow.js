import React, { useState, useEffect } from 'react';

const TopRow = (props) => {
    const [minutes, setMinutes] = useState("00");
    const [seconds, setSeconds] = useState("00");
    const [timerDisplay, setTimerDisplay] = useState("00:00");

    useEffect(() => {
                
        setTimeout(() => {
            if (props.timer >= 0) {
            
                setMinutes(parseInt(props.timer/60, 10) < 10 ? `0${parseInt(props.timer/60, 10)}` : parseInt(props.timer/60, 10));
                setSeconds(parseInt(props.timer%60, 10) < 10 ? `0${parseInt(props.timer%60, 10)}` : parseInt(props.timer%60, 10));

                setTimerDisplay(`${minutes}:${seconds}`);
                
                props.setTimer(props.timer - 1);
            }

        }, 1000);

    }, [props, timerDisplay, minutes, seconds]) ;  

    return (
        <div className="topRow">
            <div className="home">
                <h2 className="home__name">Lions</h2>

                {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

                <div className="home__score">{props.homeScore}</div>
            </div>
            <div className = "timerContainer">
                <div className="timer">{timerDisplay}</div>
                <button onClick = {() => props.setTimer(10)}>start</button>
                {/* <button onClick = {() => window.clearTimeout()}>Time Out</button> */}
            </div>
            <div className="away">
                <h2 className="away__name">Tigers</h2>
                <div className="away__score">{props.awayScore}</div>
            </div>
        </div>
    );
};

export default TopRow;