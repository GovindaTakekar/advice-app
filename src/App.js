import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";

function App(){

    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, [])

    function fetchAdvice(){
        axios.get("https://api.adviceslip.com/advice")
             .then((response)=>{
                const { advice } = response.data.slip;
                setAdvice(advice);
             })
             .catch((error) => {
                console.log(error)
             })
    }

    function buttonClickHandler(){
        fetchAdvice();
    }

    return <div className="app">
        <img className="bg-img" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80" ></img>
        <div className="card">
            <h1 className="heading" >{advice}</h1>
            <button className="button" onClick={buttonClickHandler} >
                <span>GIVE ME ADVICE</span>
            </button>
        </div>
    </div>
}

export default App;