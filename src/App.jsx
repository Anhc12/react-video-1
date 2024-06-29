import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'
import { useState } from 'react'

//() => {}
// component = html + css + js

const App= () => {
  const [todoList, setTodoList]= useState([
    {id: 1, name: "Learning React"},
    {id: 2, name: "Watching Youtube"}
  ])
  const anhc = " hoang anh Cityzen";
  const age = 25;
  const data ={address: "hanoi",
    country : "vietNam"
  }

  const addNewTodo = (name) =>{
    // alert (`call me ${name}`)
  }
  addNewTodo();
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
       addNewTodo={addNewTodo}/>
      <TodoData 
      

      name = {anhc}
      age = {age}
      data = {data}
      todoList={todoList}
      
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>

      </div>
    </div>
  )
}

export default App
