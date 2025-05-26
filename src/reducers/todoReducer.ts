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
    updateTodo: (state, action: PayloadAction<{id: number, text: string}>) => {
      const newState = state.map(todo => {
        if(todo.id === action.payload.id) {
          return {...todo, text: action.payload.text}
        }
        return todo
      })
      saveTodoToLocalStorage(newState);
      return newState;
    }
  },
})

export const { addTodo, deleteTodo, toggleTodo, updateTodo } = todosSlice.actions
export const todosReducer = todosSlice.reducer
