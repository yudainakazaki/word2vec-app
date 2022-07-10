import React from "react";
import "./Result.css";

function Result(props){

    console.log("here: " + props.score);

    return (
        <div className="result-main">
            <div className="result-container">
                <label id="score-label">
                    <span id="score"></span>
                </label>
            </div>
        </div>
    )
}

export default Result;