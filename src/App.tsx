import './App.css'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'
import { useAppSelector } from './store'

function App() {
  const todos = useAppSelector((state) => state.todos)
  const activeTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <>
      <Form />
      <TodoList todos={activeTodos} />
      <TodoList todos={completedTodos} completed />
    </>
  )
}

export default App
