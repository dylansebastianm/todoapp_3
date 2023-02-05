import { Button, Modal } from 'antd';
import { useState } from 'react';
import React from 'react';
import { Form, Input, Radio } from 'antd';
import "./Styles/CreateTodoButton.css"
import "./Styles/Form.css"




function Modalito ({addTodo}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTodoValue, setTodoValue] = React.useState("")
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = (event) => {
    setIsModalOpen(false);
    event.preventDefault();
    addTodo(newTodoValue)
    setTodoValue()

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  

    const onChange = (event) => {
        setTodoValue(event.target.value)
    }
    
/*     const onSaveTodo = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(prevState => !prevState); 
    } */

/*     const onCanceleTodo = () => {
        setOpenModal(prevState => !prevState);      

    } */


 
  return (
    <>
      <div className="div-buttonCircle">
        <div  className="buttonCircle"  type="primary" onClick={showModal}>
          +
        </div>
      </div>
      <Modal className='Form'
      title="New ToDo ✍🏻" 
      open={isModalOpen} onOk= {handleOk}  
      onCancel={handleCancel}
      
      >
      
            <Form>

            <Form.Item className="inputForm">
                <Input 
                className='inputForm'
                onChange={onChange}
                placeholder="Add new task.." />
            </Form.Item>

            </Form>
      </Modal>
    </>
  );
};
export default Modalito;