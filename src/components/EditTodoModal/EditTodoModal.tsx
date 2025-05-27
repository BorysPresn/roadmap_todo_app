import React from 'react'
import cl from './EditTodoModal.module.css'
import Modal from '../Modal/Modal'
import EditTodoForm from '../EditTodoForm/EditTodoForm'


interface EditTodoModalProps {
  todoText: string;
  onClose: (e: React.MouseEvent) => void
  onSave: (text: string) => void
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ todoText, onClose, onSave }) => {
  
  return (
    <Modal onClose={onClose}>
      <h4>Редактировать задачу</h4>
      <EditTodoForm todoText={todoText} onSave={onSave} />
      <button type="button" className={cl.btn} onClick={onClose}>
        X
      </button>
    </Modal>
  )
}

export default EditTodoModal
