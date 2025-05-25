import React from 'react'
import type { Todo } from '../../types'
import cl from './TodoItem.module.css'

interface TodoItemProps {
    todo: Todo,
    onToggle: () => void;
    onDelete: () => void;
    completed?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, completed}) => {
  return (
    <li className={completed ? cl.completed : ''}>
      <p>{todo.text}</p>
      <div className={cl.actions}>
        <span
          className={`${cl.checkbox} ${completed && cl.checked}`}
          onClick={onToggle}
          title={ completed ? 'Отметить как активное' : 'Отметить как выполненое'}
        /> 
        <span
          className={cl.trash}
          onClick={onDelete}
          title='Удалить'
        />
      </div>
    </li>
  )
}

export default TodoItem
