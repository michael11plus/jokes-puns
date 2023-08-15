import React from 'react';
import ReactDOM from 'react-dom';
import Joke from './components/Joke';
import './App.css'

export default function App() {
    return(
    <div className="app">
        <Joke 
            setup="I told my wife she was drawing her eyebrows too high."
            punchline="She looked surprised."
            rating="5"
            noratings="142"
        />
        <Joke 
            setup="You don't need a parachute to go skydiving."
            punchline="You need a parachute to go skydiving twice."
            rating="4.7"
            noratings="1001"
            />
         <Joke 
            setup="We have a genetic predisposition for diarrhea."
            punchline="Runs in our jeans."
            rating="4.4"
            noratings="74"
            />    
        <Joke 
            setup="Parallel lines have so much in common."
            punchline="It's a shame they'll never meet."
            rating="2.6"
            noratings="47"/>
        <Joke 
            setup="You are not completely useless."
            punchline="You can always serve as a bad example."
            rating="4.1"
            noratings="217"/>
        <Joke 
            setup="Working in a mirror factory is something..."
            punchline="I can totally see myself doing."
            rating="4.4"
            noratings="74"
            />
            <Joke 
            setup="Why did the scarecrow win an award?"
            punchline="Because he was outstanding in his field."
            rating="4.8"
            noratings="135"
        />
        <Joke 
            setup="Why did the math book look sad?"
            punchline="Because it had too many problems."
            rating="4.5"
            noratings="151"
            />
         <Joke 
            setup="Why don't scientists trust atoms?"
            punchline="Because they make up everything."
            rating="3.4"
            noratings="34"
            />    
        <Joke 
            setup="Why don't seagulls fly over the bay?"
            punchline="Because then they'd be bagels."
            rating="4.3"
            noratings="57"/>
        <Joke 
            setup="What's a skeleton's least favorite room in the house?"
            punchline="The living room."
            rating="4.2"
            noratings="52"/>
    </div>
    )
}