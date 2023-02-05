import React from "react";
import "./Styles/TodoItem.css"
import { BsCircle, BsFillCheckCircleFill } from "react-icons/bs";
import { TiDeleteOutline } from "react-icons/ti";



function TodoItem(props) {
    /* const onComplete = () => {
        alert("You has completed the ToDo " + props.text)
    }

    const onDelete = () => {
        alert("You has deleted the ToDo " + props.text)
    } */


    return(
        <div className="contenedor-items">
        <hr></hr>
        <li className={`checkYpalabra TodoItem ${props.completed && 'TodoItemCompleted TodoItem'}`}>
        

            <div className="checkYpalabra">
                <div className="Check_v2" 
                
                onClick={props.onCompleted}
                >

                {props.completed ? <BsFillCheckCircleFill className="CheckCompleted" /> :  <BsCircle className="Check"/> }
                
                </div>

                <p className="TodoText">
                
                {props.text}

                </p>
            </div>

            <span
            className="borrar"
            onClick={props.onDeleted}>
                <TiDeleteOutline/>
            </span>



       
            
        </li>
        </div>
    )
}

export {TodoItem};  
