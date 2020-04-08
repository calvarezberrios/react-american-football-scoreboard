import React from 'react';

const Buttons = props => {

    

    return (
        <div className={props.divClass}>
            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
            <button className={`${props.divClass}__touchdown`} onClick = {props.touchdown} >Home Touchdown</button>
            <button className={`${props.divClass}__fieldGoal`} onClick = {props.fieldGoal} >Home Field Goal</button>
        </div>
    );
};

export default Buttons;