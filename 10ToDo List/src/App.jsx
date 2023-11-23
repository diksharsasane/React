import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(todo)=>{
    // setTodos(todo)==>if we do like these then all old value get overrideif present we need to add new value
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])//prev--->old array  {/*todo*/}-->1st we cant give directly give in formate
  }

  const updateTodo=(id,todo)=>{  //data id and its todo
    //run loop on array and tell on which array which property we want to use
    setTodos((prev) =>prev.map((prevTodo)=>(prevTodo.id===id ?todo : prevTodo)))   //prevtodo.id-->each todo id and id-->id come to update

  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo) => todo.id !==id))  //new array has all value whose id dont match
  }

  const toggleComplete=(id)=>{
    setTodos((prev) => prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed} : prevTodo))
  }

  {/*useEffect==> when we start application it first load all the value present in local storage*/}
  useEffect(()=>{
    JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key ={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
