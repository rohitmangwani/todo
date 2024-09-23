import React from 'react'
import TodoList from './TodoList'
import { useTodo } from '../context'

function TodoLists() {
  const {todoData:todos}  = useTodo();
  return (
    <div>
        <h1 className='text-white flex justify-center items-center mt-4 text-2xl'>Todos</h1>
        <div className='text-white flex justify-center items-center mt-10'>
        {todos && todos.length ? 
        <div className='flex flex-col gap-4'>
            {todos.map(todo=>(
                <TodoList key={todo.id} todo={todo} />
            ))}

        </div>:'No todo found'}
    </div>
    </div>
  )
}

export default TodoLists