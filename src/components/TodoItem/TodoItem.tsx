import React from 'react'
import type { Todo } from '../../types'
import cl from './TodoItem.module.css'

interface TodoItemProps {
    todo: Todo,
    onToggle: () => void;
    onDelete: () => void;
    onEdit: () => void;
    completed?: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({todo, onDelete, onToggle, onEdit, completed}) => {
  return (
    <li className={completed ? cl.completed : ''}>
      <p className={cl.todo_text}>{todo.text}</p>
      <div className={cl.actions}>
        <span
          className={`${cl.checkbox} ${completed && cl.checked}`}
          onClick={onToggle}
          title={ completed ? 'Отметить как активное' : 'Отметить как выполненое'}
        />
        <span className={cl.edit} onClick={onEdit} title='Изменить'/> 
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
