import React from "react";
import ReactDOM from "react-dom";
import './Joke.css'

export default function Joke(props) {
    return(
        <div className="joke">
            <div className="setup">
                {props.setup}
            </div>
            <div className="punchline">
                {props.punchline}
            </div>
            <div className="ratings">
                <div className="rating">
                    rating: <b>&nbsp; {props.rating} </b>
                </div>
                <div className="noratings">
                    ({props.noratings})
                </div>
            </div>
        </div>
    )
}