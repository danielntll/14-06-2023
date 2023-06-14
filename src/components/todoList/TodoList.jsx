import Todo from '../todo/Todo'
import './index.css'

const TodoList = ({
  todoList,
  handleCompleteTodo,
  handleUndoTodo,
  handleDeleteTodo,
}) => {
  // VARIABLES ------------------------
  // CONDITIONS -----------------------
  // RETURN ---------------------------
  return (
    <div className='TodoList'>
      {
        todoList ? todoList?.map((elem, index) => {
          return (
            <Todo key={index + "todo"} data={elem} handleCompleteTodo={handleCompleteTodo}
              handleUndoTodo={handleUndoTodo} handleDeleteTodo={handleDeleteTodo} />
          )
        })
          :
          <p>Non ci sono elementi</p>
      }
    </div>
  )
}

export default TodoList