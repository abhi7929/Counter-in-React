import React, {useState} from "react"
import "./style.css"

const App=()=>{

    let [score, setScore]= useState(0)
    function add()
    {
        let a=10
        let b=20
        return a+b;
    }
    add()
    return(
        <div>
            <h1> Hey this is my counter application</h1>
            <h3> The value of score is {score}</h3>
            <button onClick={()=>(score < 25) ? setScore(score+1) : ""}>Increment</button>
            <button onClick={()=>score > 0 ? setScore(score-1) : ""}>Decrement</button>
            {/* -when we pass function(with parenthesis) as argument then it directly called the function even not wait for any event like onclick for e.g. onclick={setScore()}. So, use onclick={()=>{setScore()}}>
                -When we pass function (without parenthesis) as argument  then it wait for some event to be occured and then it called it for. e.g. onclick={setScore} */}
            <button onClick={function () { setScore(0)}}>Reset</button>
        </div>
    )
}

export default App