import { useState, Dispatch, SetStateAction } from 'react'

const TodoItem = ({
  todo,
  todos,
  setTodos,
  index,
}: {
  todo: string
  todos: string[]
  setTodos: Dispatch<SetStateAction<string[]>>
  index: number
}) => {
  const [isChecked, setIsChecked] = useState(false)

  //   Handler for todo item delete
  const handleDelete = () => {
    const updatedTodos = todos.filter((_, i: number) => i !== index)
    setTodos(updatedTodos)
  }

  return (
    <div className="todo-item">
      <div>
        <input
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
          style={{ marginRight: '5px' }}
          id={'task' + index}
        />
        <label htmlFor={'task' + index} className={isChecked ? 'checked' : ''}>
          {todo}
        </label>
      </div>
      <button
        style={{ backgroundColor: '#f44336', color: 'white' }}
        className="button"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem
