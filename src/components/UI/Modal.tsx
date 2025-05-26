import React from 'react'
import cl from './Modal.module.css'

interface ModalProps {
  children: React.ReactNode;
  onClose: (e: React.MouseEvent) => void;
}
const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className={cl.modal_overlay} onMouseDown={onClose}>
      <div
        className={cl.modal_content}
        onMouseDown={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
