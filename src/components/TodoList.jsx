import React, { useEffect, useState } from 'react'
import { useTodo } from '../context';

function TodoList({todo}) {
    const {deleteTodo,editTodo} = useTodo();
    const [editable,setEditable] = useState(false)
    const [completed,setCompleted] = useState(todo.completed)
    const [newTodo,setNewTodo] = useState(todo.todo);

    useEffect(()=>{
        setCompleted(todo.completed);
        console.log(todo)
    },[completed])

    const handleDeleteTodo = (id)=>{
        deleteTodo(id);
    }
   
    const handleEditTodo = (newTodo)=>{
        editTodo({id:todo.id,todo:newTodo});
        setEditable(false);
    }
    
    const handleComplete = ()=>{
        setCompleted(true);
        editTodo({id:todo.id,todo:todo.todo,completed:true});
        console.log("set completed");
    }
  return (
    <div className='bg-white w-full p-4 rounded flex  justify-between'>
        {/* <p key={todo.id} className='text-black'>{todo.todo}</p> */}ToDo List App
       { !todo.completed &&( <input type="text " className='text-black outline-none' value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} disabled={!editable}/>)}
        {todo.completed && (<div className='text-black outline-none w-96'><s>{todo.todo}</s></div>)}

      {!todo.completed &&
        ( <div className='flex gap-2 p-2'>
            <button className='bg-blue-600 rounded px-2' onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
           {!editable && (<button className='bg-blue-600 rounded px-2'onClick={()=>setEditable((prev)=>!prev)} >Edit</button>)}
            {editable && (<button className='bg-blue-600 rounded px-2' onClick={()=>handleEditTodo(newTodo)} >save</button>)}
              <button className='bg-blue-600 rounded px-2' onClick={handleComplete}> Mark as completed</button>
            </div>)
      }
    </div>
  )
}

export default TodoList