import React from "react";
import "./Buttons.css";

function callApi(word1, word2){

    const data = {
        "word1": word1,
        "word2": word2
    }

    fetch("http://127.0.0.1:8000/get-similarity/", {
        method: "POST",
        body: JSON.stringify(data),
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },}).then(response => {
                    if(!response.ok){
                        throw new Error(response.status);
                    }else{
                        return response.json();
                    }
                }).then(response => {
                    console.log(response.ok);
                    const val = Math.round(response["similarity"] * 1000) / 10;
                    document.getElementById("score").innerHTML = val + " %";
                    console.log(val);
                    return val;
                }).catch((error) => {
                    console.log('error: ' + error);
                    document.getElementById("score").innerHTML = "Server is not running. Sorry 😥";
                });
}

function Buttons(props){

    const handleClick = () => {
        if(props.state === "prompt"){
            if (props.words.word1 !== "" && props.words.word2 !== ""){
                props.setScore(callApi(props.words.word1, props.words.word2));
                props.setState("result");
            }
        }else{
            props.setState("prompt");
            props.setWords({
                word1: "",
                word2: ""
            });
            props.setScore(0);
        }
    }

    return (
        <div className="buttons-main">
            <div className="buttons-inner-container">
                <button id="exec-button" onClick={handleClick}>
                    {props.state === "prompt" ? "Execute" : "Reset"}
                </button>
            </div>
        </div>
    )
}

export default Buttons;