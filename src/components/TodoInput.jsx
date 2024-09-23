import { useState } from "react"
import { useTodo } from "../context";

const TodoInput = () => {
    const[todo,setTodo] = useState('');
    const {addTodo} = useTodo();

    const handleAddClick = (todo)=>{
        const id = Math.floor(Math.random()*1000);
        addTodo({id,todo,completed:false});
        setTodo('');
    }
  return (
    <div className='flex  gap-5 justify-center items-center mt-20' > 
        <input type="text" className=' border border-indigo-100  p-2 w-96 outline-none ' 
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button className='bg-blue-500 p-2 text-white rounded' onClick={(e)=>handleAddClick(todo)}>Add</button>
    </div>
  )
}

export default TodoInput