  import { useEffect, useState } from 'react'
  import './App.css'
  import TodoInput from './components/TodoInput'
import TodoLists from './components/TodoLists';
import { TodoProvider } from './context';

  function App() {
    const [todoData,setTodoData] = useState([]);
    const addTodo = (todo)=>{
      setTodoData([...todoData,todo]);
  
    }

    const deleteTodo = (id)=>{
        const tempTodos = todoData.filter(item=>item.id!==id);
        setTodoData(tempTodos);
    }
    const editTodo = (todo)=>{
      const newTodoData = todoData.map(item=>item.id === todo.id ? {...item,todo:todo.todo,completed:todo.completed} : item)
      setTodoData(newTodoData);
    }
    const togglecomplete = ()=>{

    }

    useEffect(()=>{
      const todos = JSON.parse(localStorage.getItem("todos"));
      if(todos && todos.length>0){
          setTodoData(todos);
      }
    },[])
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todoData));
    },[todoData]);

    return (
      <TodoProvider value={{todoData,addTodo,editTodo,deleteTodo,togglecomplete}}>
        <TodoInput />
       <TodoLists/>
      </TodoProvider>
    )
  }

  export default App
