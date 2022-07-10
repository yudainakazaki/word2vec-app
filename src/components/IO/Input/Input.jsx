import React from "react";
import "./Input.css";

function Input(props){

    const hundleChange = num => (event) => {
        if (num === 1){
            props.setWords({
                word1: event.target.value,
                word2: props.words.word2
            });
        } else {
            props.setWords({
                word1: props.words.word1,
                word2: event.target.value
            });
        }
    }

    return (
        <div className="input-main">
            <div className="input-box-container">
                <input className="input-box" placeholder="" onChange={hundleChange(1)}></input>
            </div>
            <div className="input-box-container">
                <input className="input-box" placeholder="" onChange={hundleChange(2)}></input>
            </div>
        </div>
    )
}

export default Input;