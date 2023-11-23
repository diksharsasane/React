import { createContext, useContext } from "react"

export const TodoContext= createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo:(todo) =>{},
    updateTodo:(id,toda) =>{},
    deleteTodo:(id) =>{},
    toggleComplete: (id)=>{}
})



export const useTodo =()=>{
    return useContext(TodoContext)//give info that for which context we have useing
}

export const Todoprovider = TodoContext.Provider