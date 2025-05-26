import { useForm, type SubmitHandler } from 'react-hook-form'
import cl from './Form.module.css'
import React from 'react'
import { useAppDispatch } from '../../store'
import { addTodo } from '../../reducers/todoReducer'

interface FormData {
  text: string
}
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormData>()
  const dispatch = useAppDispatch()

  const submit: SubmitHandler<FormData> = (formState) => {
    dispatch(addTodo({ text: formState.text }))
    reset()
  }

  return (
    <form className={cl.form} onSubmit={handleSubmit(submit)}>
      <input
        className={cl.input}
        placeholder="Новая задача"
        {...register('text', {
          validate: (value) => (value ? value.trim().length > 0 : false),
        })}
      />
      <button
        type="submit"
        className={`${cl.button}`}
        disabled={!isValid}
      />
    </form>
  )
}

export default Form
