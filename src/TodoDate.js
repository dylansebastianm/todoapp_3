import React from "react";
import "./Styles/TodoDate.css"

function TodoDate(/* {completedTodos, totalTodos} */) {
    return(
        <div className="date">
              <h1>{new Date().toDateString()}</h1>
             
        </div>
    )
}

export {TodoDate};

 {/* <h2 > "You have completed {completedTodos} of {totalTodos} ToDos"</h2> */}