import React from "react";
import "./Styles/TodoSearch.css"

function TodoSearch({SearchValue, setSearchValue}) {

    
     
    const onSearchValue = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return(
        <div className="bus-contenedor">
        <input className="buscador"
        placeholder="Search some task.."
        value={SearchValue}
        onChange={onSearchValue}/>
        </div>
        
    );
}

export {TodoSearch};