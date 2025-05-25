import cl from './TodoList.module.css'
import React from 'react'
import type { Todo } from '../../types'
import { useAppDispatch } from '../../store'
import { deleteTodo, toggleTodo } from '../../reducers/todoReducer'
import TodoItem from '../TodoItem/TodoItem'

interface TodoListProps {
  todos: Todo[]
  completed?: boolean
}

const TodoList: React.FC<TodoListProps> = ({ todos, completed = false }) => {
  const dispatch = useAppDispatch()

  const handleToggle = (id: number): void => {
    dispatch(toggleTodo({ id }))
  }
  const handleDelete = (id: number, text: string): void => {
    if (confirm(`Удалить задачу \n "${text}"?`)) {
      dispatch(deleteTodo({ id }))
    }
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
              onDelete={() => handleDelete(todo.id, todo.text)}
            />
          ))}
      </ul>
    </div>
  )
}

export default TodoList
