import cl from './TodoList.module.css'
import React, { useState } from 'react'
import type { Todo } from '../../types'
import { useAppDispatch } from '../../store'
import { deleteTodo, toggleTodo } from '../../reducers/todoReducer'
import TodoItem from '../TodoItem/TodoItem'
import ConfirmModal from '../ConfirmModal/ConfirmModal'

interface TodoListProps {
  todos: Todo[]
  onEdit: (todo: Todo) => void
  completed?: boolean
}

const TodoList: React.FC<TodoListProps> = ({ todos, onEdit, completed = false}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [todoId, setTodoId] = useState<number | null>(null)
  const dispatch = useAppDispatch()

  const handleToggle = (id: number): void => {
    dispatch(toggleTodo({ id }))
  }

  const getConfirm = () => {
    if (todoId) {
      dispatch(deleteTodo({ id: todoId }))
    }
    setModalIsOpen(false)
    setTodoId(null)
  }
  const handleEditModal = (todo: Todo): void => {
    onEdit(todo)
  }
  const handleDelete = (id: number): void => {
    setModalIsOpen(true)
    setTodoId(id)
  }
  return (
    <div>
      <p className={cl.title}>
        {completed ? 'Завершено - ' : 'Список дел - '}
        {todos.length}
      </p>
      <ul>
        {todos.length > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completed={completed}
              onToggle={() => handleToggle(todo.id)}
              onDelete={() => handleDelete(todo.id)}
              onEdit={() => handleEditModal(todo)}
            />
          ))}
      </ul>
      {modalIsOpen && todoId && (
        <ConfirmModal
          onClose={() => setModalIsOpen(false)}
          onConfirm={getConfirm}
        />
      )}
    </div>
  )
}

export default TodoList
