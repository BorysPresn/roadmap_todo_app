import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import cl from './EditTodoForm.module.css'
import clsx from 'clsx'

interface EditTodoFormProps {
  todoText?: string
  onSave: (text: string) => void
}

interface FormData {
  text: string
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todoText, onSave }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormData>({
    defaultValues: {
      text: todoText,
    },
  })

  const saveEditedTodo: SubmitHandler<FormData> = (formState) => {
    console.log(isValid);
    onSave(formState.text)
    reset()
  }
  return (
    <form className={cl.modal_form} onSubmit={handleSubmit(saveEditedTodo)}>
      <textarea
        className={cl.textarea}
        {...register('text', {
          validate: (value) => (value ? value.trim().length > 0 : false),
        })}
      />
      <button
        className={clsx(cl.button, cl.btn)}
        type="submit"
        disabled={!isValid}
      >
        Сохранить
      </button>
    </form>
  )
}

export default EditTodoForm
