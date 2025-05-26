import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'
import { useAppDispatch, useAppSelector } from './store'
import EditTodoModal from './components/EditTodoModal/EditTodoModal'
import type { Todo } from './types'
import { updateTodo } from './reducers/todoReducer'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [todoToUpdate, setTodoToUpdate] = useState<Todo>()
  const todos = useAppSelector((state) => state.todos)
  const activeTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)
  const dispatch = useAppDispatch()

  const openModal = (todo: Todo): void => {
    setTodoToUpdate({ ...todo })
    setModalIsOpen(true)
  }
  const saveTodo = (text: string): void => {
    if (todoToUpdate) {
      dispatch(updateTodo({ id: todoToUpdate.id, text: text }))
      setModalIsOpen(false)
    }
  }

  return (
    <>
      <Form />
      <TodoList todos={activeTodos} onEdit={openModal} />
      <TodoList todos={completedTodos} onEdit={openModal} completed />
      {modalIsOpen && todoToUpdate && (
        <EditTodoModal
          todoText={todoToUpdate.text}
          onClose={() => setModalIsOpen(false)}
          onSave={saveTodo}
        />
      )}
    </>
  )
}

export default App
