import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import './components/todo/todo.css'
import reactLogo from './assets/react.svg'

//() => {}
// component = html + css + js

const App= () => {
  
  const anhc = " hoang anh Cityzen";
  const age = 25;
  const data ={address: "hanoi",
    country : "vietNam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData 
      

      name = {anhc}
      age = {age}
      data = {data}
      
      />
      <div className='todo-image'>
        <img src={reactLogo} className='logo'/>

      </div>
    </div>
  )
}

export default App
