import { useState } from "react";

const TodoNew = (props) => {

//useState hook (getter/setter)
  // const valueInput = "anhc"
  
  const [valueInput, setValueInput] = useState("AnhC ")
  
  const {addNewTodo}=props;
  
  // addNewTodo("hoang anh")
  const handleClick =() =>{
    console.log("check valueInput ", valueInput)
  }

  const handleOnChange =(name) =>{
    
    setValueInput(name)
  }
 return(
  <div className='todo-new'>
        <input type="text" placeholder='Enter your task'
        onChange={(event)=>handleOnChange(event.target.value)}
        />
        <button style={{cursor:"pointer"}}
        onClick={handleClick}
        >Add</button>
        <div>my text input is : {valueInput} 

        </div>
      </div>
 )
}
export default TodoNew;