import React from "react";
import './Styles/Form.css'

function Form({addTodo, setOpenModal}){
    const [newTodoValue, setTodoValue] = React.useState("")

    const onChange = (event) => {
        setTodoValue(event.target.value)
    }
    
    const onSaveTodo = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(prevState => !prevState); 
    }

    const onCanceleTodo = () => {
        setOpenModal(prevState => !prevState);      

    }


    return(
        <React.Fragment>
        <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label"></label>
    {/*  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Write ToDo.."/> */}
        </div>
        <div className="mb-3  forms">
        <label for="exampleFormControlTextarea1" className="form-label"></label>
        <textarea
            
            onChange={onChange}
            className="form-control" id="exampleFormControlTextarea1" rows="5"/>
        </div>
        <div className="forms">
        <button type="button" onClick={onCanceleTodo}> Canceled </button>
        <button type="submit" onClick={onSaveTodo}> Save ToDo </button>
        </div>
    </React.Fragment>

    )
}

export {Form};

