import React from "react";
import "./Styles/TodoList.css"

function TodoList(props, {completedTodosBackground}) {
    return(
        <section className="lista">
            
            <ul /* className= {`contenedor-items ${{completedTodosBackground} && 'contenedor-items-Completed'}`} */>
                {props.children}
            </ul>
          
        </section>
    )
}

export {TodoList};