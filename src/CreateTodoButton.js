import React from "react";
import "./Styles/CreateTodoButton.css"
import { MdAddCircle } from "react-icons/md";



function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState); 
    }


    return(
        <div className="div-buttonCircle" >
    <div
        className="buttonCircle" 
        onClick = {onClickButton}
        
        >
        <MdAddCircle/>
        
        </div>    
        
    </div>
    )
}

export {CreateTodoButton};