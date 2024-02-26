import { useState } from 'react'
import Modal from './components/Modal'
import TodoList from './components/TodoList'

function App() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState(['Do the dishes.', 'Finish this project.'])

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List</h1>
      <TodoList todos={todos} setTodos={setTodos} />

      {/* Form for todo input */}
      <form
        className="form-container"
        onSubmit={(event) => {
          event.preventDefault()
          if (input.trim() !== '') {
            setTodos([...todos, input])
            setInput('')
          }
        }}
      >
        {
          <input
            className="input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter task"
          />
        }

        <button className="field-button">Create Task</button>
      </form>
      <Modal />
    </div>
  )
}

export default App
