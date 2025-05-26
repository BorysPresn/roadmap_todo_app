import React from 'react'
import Modal from '../UI/Modal'
import cl from './ConfirmModal.module.css'

interface ConfirmModalProps {
  onClose: (e: React.MouseEvent) => void
  onConfirm: () => void
}
const ConfirmModal: React.FC<ConfirmModalProps> = ({ onClose, onConfirm }) => {
  return (
    <Modal onClose={onClose}>
      <p>Вы точно хотите удалить задачу?</p>
      <div className={cl.action_buttons}>
        <button type="button" className={cl.btn} onClick={onConfirm}>
          Да
        </button>
        <button type="button" className={cl.btn} onClick={onClose}>
          Нет
        </button>
      </div>
    </Modal>
  )
}

export default ConfirmModal
