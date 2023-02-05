import React from "react";
import "./Styles/TodoCounter.css"

function TodoCounter ({totalTodos}) {
    return(

        <div className="contador contadorNumero">
            
            <p>{totalTodos} tasks</p>
            

            <div className="contenedor-filtros">
                
                <p className="filtro">All  </p>
                

                
                <p className="filtro">Active  </p>
               

                
                <div className="filtro">Completed</div>
                
            </div>
       
            
        </div>

    )
}
export {TodoCounter};
