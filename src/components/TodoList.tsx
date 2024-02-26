import { Dispatch, SetStateAction } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, setTodos }: { todos: string[], setTodos:Dispatch<SetStateAction<string[]>> }) => {
  return (
    <div className='todolist-container'>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} todos={todos} key={index} index={index} setTodos={setTodos} />
      ))}
    </div>
  )
}

export default TodoList
