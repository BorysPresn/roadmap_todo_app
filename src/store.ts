import { configureStore, type Store } from '@reduxjs/toolkit'
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'
import { todosReducer } from './reducers/todoReducer'
import type { RootState } from './types'
import { getTodosFromLocalStorage } from './utils/utils'

const preloadedState = { todos: getTodosFromLocalStorage() }
export const store: Store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  preloadedState,
})

export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => useDispatch<AppDispatch>()
