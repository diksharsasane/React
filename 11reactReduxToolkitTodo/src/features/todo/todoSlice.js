// import { createSlice ,nanoid  } from "@reduxjs/toolkit";//slice-->redux toolkit  || reducer-->redux  || nanoid-->generate unic id

// const initialState = {              //initial state of store
//     todos:[{id:1,text:"Hello world"}]
// }

// export const todoSlice = createSlice({
//     name: 'todo',  //when we use redux toolkit extension of chrom this name will be shown
//     initialState,
//     reducers:{
//         addTodo: (state,action)=>{
//             const todo={
//                 id:nanoid(),
//                 text:action.payload
//             }
//             state.todos.push(todo)
//         },   //context api we not declare function but here it is must
//         removeTodo: (state,action)=>{
//             state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
//         },//state=>current value in initial State || action=>value on what basis u do opration
//         updateTodo:(state,action)=>{
//             state.todos=state.todos.map((todo)=>todo.id===action.payload?action.payload:todo)
//         }
//     }  //properties: function
// })

// export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

// export default todoSlice.reducer

import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({   //functionality like reducer
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo:(state,action) => {
            //state.todos = state.todos.map((todo)=>todo.id===action.payload.id?action.payload.text:todo.text)
            state.todos = state.todos.map((todo) =>todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo);
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions       //we update the reducers though the functionalities like addTodo, removeTodo

export default todoSlice.reducer