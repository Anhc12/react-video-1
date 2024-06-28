const TodoNew = (props) => {
  console.log("check poin", props);
const {addNewTodo}=props;
  // addNewTodo("hoang anh")
 return(
  <div className='todo-new'>
        <input type="text" placeholder='Enter your task'/>
        <button>Add</button>
      </div>
 )
}
export default TodoNew;