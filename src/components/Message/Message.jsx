import React from "react";
import "./Message.css";

function Message(props){
    return (
        <div className="message-main">
            <div className="message-label-container">
                {props.state === "prompt" ?
                    <label id="message-label">Type in two words of which you want to execute a calculation for the distance of meanings.</label> :
                    <label id="message-label">The similarity between <span className="word">{props.words.word1}</span> and <span className="word">{props.words.word2}</span> is ...</label>
                }
            </div>
        </div>
    )
}

export default Message;
