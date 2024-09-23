import { createContext ,useContext } from "react";

export const TodoContext = createContext({
    todoData:[
        {
            id:1,
            todo:"Todo message",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete:()=>{}
});

export const useTodo = ()=> useContext(TodoContext);

export const TodoProvider = TodoContext.Provider