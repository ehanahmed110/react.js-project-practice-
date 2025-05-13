import React from 'react'
import { TodoForm } from './components/TodoForm'
import { TodoProvider } from './components/TodoContext'
import { TodoList } from './components/TodoList'



function App() {

  return (
    <>
      <TodoProvider>
        <div className='container mx-auto bg-gray-100'>
          <h1 className='text-3xl text-center font-bold mt-6'>📝 My ToDo App</h1>
           <TodoForm/>
           <TodoList/>
        </div>
           
      </TodoProvider>
      
    </>
  )
}

export default App
