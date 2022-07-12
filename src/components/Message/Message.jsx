import React from "react";
import "./Message.css";

function Message(props){

    const promptMessage = 
        <div>
            Type in two words of which you want to execute a calculation for the distance of meanings.
        </div>;
    
    const resultMessage = 
        <div>
            The similarity between 
            <span className="word"> {props.words.word1}</span> and 
            <span className="word"> {props.words.word2}</span> is ...
        </div>

    const errorMessage =
        <div>
            Sevrer is not running right now 😢
        </div>

    const showMessage = () => {
        if(props.state === "prompt"){
            return promptMessage;
        }else if(props.state === "result"){
            return resultMessage;
        }else{
            return errorMessage;
        }
    }

    return (
        <div className="message-main">
            <div className="message-label-container">
                <label id="message-label">
                    {showMessage()}
                </label>
            </div>
        </div>
    )
}

export default Message;
