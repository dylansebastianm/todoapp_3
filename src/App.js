import React from 'react';
import { TodoDate } from './TodoDate';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

/* import { Form } from './Form'; */
import "./Styles/App.css"
import { TodoCounter } from './TodoCounter';
import Modalito from './Modal';



/* const defaulttodoList = [
  {text: "Buy tupperwares to food of week", completed: false},
  {text: "Clean the house", completed: false},
  {text: "Make a rutine week", completed: false},
  {text: "Rellenar bolsa de box", completed: false},
  {text: "Limpiar caja de arena", completed: false},

] */
function App() {

  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parseTodos;
  
  if(!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parseTodos = [];
  } else {
    parseTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parseTodos);

  const [SearchValue, setSearchValue] = React.useState("")

  const [openModal, setOpenModal] = React.useState(true)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const completedTodosBackground = todos.filter(todo => !!todo.completed) 
  const totalTodos = todos.length;

  //FILTRO PARA MOSTRAR UNICAMENTE LOS TODOS QUE ESTOY BUSCANDO
  let searchedTodos = [];

  if(!SearchValue.length >=1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(e => {
      const todoTextOriginal = e.text.toLowerCase();
      const searchText = SearchValue.toLowerCase();
      return todoTextOriginal.includes(searchText)
    });
  };


  const saveTodos = (newTodos) => {
    const strigifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem("TODOS_V1", strigifiedTodos);
    setTodos(newTodos)
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(e => e.text === text);
    const newTodo = [...todos]
    newTodo[todoIndex].completed = true;
    saveTodos(newTodo);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(e => e.text === text);
    const newTodo = [...todos]
    newTodo.splice(todoIndex, 1)
    saveTodos(newTodo);
  };

  const addTodo = (text => {
    const newTodo = [...todos]
    newTodo.push({
      completed: false,
      text
    });
    saveTodos(newTodo);

  })

  const filterTodoCompleted = todos.filter(e => e.completed === true);


  return (
    <div className="App-container"> 
        <TodoDate 

          completedTodos={completedTodos}
          totalTodos={totalTodos}
          />      
          
        <TodoCounter
          totalTodos={totalTodos}
        />

        <TodoSearch 
          SearchValue={SearchValue}
          setSearchValue={setSearchValue}
        
        />
          
        <TodoList
        
          completedTodosBackground = {completedTodosBackground}>
            
          {searchedTodos.map(e => (
            <TodoItem 
            key = {e.text} 
            text = {e.text}
            completed = {e.completed}
            onCompleted={()=> completeTodos(e.text)}
            onDeleted={()=> deleteTodos(e.text)}
            
            />
          ))}
        </TodoList>
         
        

       {!!openModal && (

          <Modalito
          
          addTodo={addTodo}
          >
          </Modalito>
      
        )}     





{/*       <CreateTodoButton 
        setOpenModal = {setOpenModal}
      /> */}

            
     

    </div>
    
  );
}

export default App;


        {/* <Form
          addTodo={addTodo}
          setOpenModal = {setOpenModal}
        >
        </Form> */}