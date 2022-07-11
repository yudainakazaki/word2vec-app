import React from "react";
import "./Message.css";

function Message(props){

    const promptMessage = 
        <label id="message-label">
            Type in two words of which you want to execute a calculation for the distance of meanings.
        </label>;
    
    const resultMessage = 
        <label id="message-label">
            The similarity between 
                <span className="word"> {props.words.word1}</span> and 
                <span className="word"> {props.words.word2}</span> is ...
        </label>;

    return (
        <div className="message-main">
            <div className="message-label-container">
                {props.state === "prompt" ?
                    promptMessage :
                    resultMessage
                }
            </div>
        </div>
    )
}

export default Message;
