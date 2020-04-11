import React from 'react';

const Buttons = props => {

    

    return (
            <div className={`${props.team.toLowerCase()}Buttons`}>
                {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
                <button className={`${props.team.toLowerCase()}Buttons__touchdown`} onClick = {props.touchdown} >{props.team} Touchdown</button>
                <button className={`${props.team.toLowerCase()}Buttons__fieldGoal`} onClick = {props.fieldGoal} >{props.team} Field Goal</button>
            </div>
    );
};

export default Buttons;