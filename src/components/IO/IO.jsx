import React from "react";
import "./IO.css";
import Input from "./Input/Input";
import Result from "./Result/Result";

function IO(props){
    return (
        <div className="io-main">
            <div className="io-inner-container">
                {
                    props.state === "prompt" ? 
                        <Input 
                            words={props.words} 
                            setWords={props.setWords}
                            state={props.state}
                        /> : 
                        <Result 
                            state={props.state}
                            score={props.score}
                        />
                }
            </div>
        </div>
    )
}

export default IO;