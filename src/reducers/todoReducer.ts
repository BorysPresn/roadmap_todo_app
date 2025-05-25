import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type Todo } from '../types'
import { saveTodoToLocalStorage } from '../utils/utils'

const initialState: Todo[] = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      state.unshift({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      })
      saveTodoToLocalStorage(state)
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const newState = state.filter((todo) => todo.id !== action.payload.id)
      saveTodoToLocalStorage(newState)
      return newState
    },
    toggleTodo: (state, action: PayloadAction<{ id: number }>) => {
      const todoIndex = state.findIndex((todo) => todo.id === action.payload.id)
      if (todoIndex !== -1) {
        const elem = state[todoIndex]
        const newState = state.filter((_, index) => index !== todoIndex)
        const toggledElem = { ...elem, completed: !elem.completed }
        newState.unshift(toggledElem)
        saveTodoToLocalStorage(newState)
        return newState
      }
      return state
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer
