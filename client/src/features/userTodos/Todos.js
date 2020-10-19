  
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { selectTodo, display, getTodos, removeTodo, addATodo, deleteTodo } from "./todosSlice"


export function Todos () {
  const todo = useSelector(selectTodo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodos(todo))
  }, [])
  
  
  const [inputText, setInputText] = useState("")
  function handleSubmit(e) {
    e.preventDefault()
    addATodo(inputText)
    setInputText("")
  }
  function handleDelete() {
    dispatch(removeTodo(todo))
  }


  return (
    
    
<div>
    <div className="input">
    <form className="form" onSubmit={handleSubmit} >
          <input
          key={todo.id}
            className="inputArea"
            type="text"
            value={inputText}
            placeholder="Enter Your To Do Here"
            onChange={(e) => setInputText(e.target.value)}
          ></input>
        </form>
</div> 

 {todo.map((item) => (     
    <div className="todos" key={item.id}>
  
<div>
    <div className="output"  >
          <div>{item.description}</div>
          <div>{item.status}</div>
          <div><button>Completed</button></div>
          <div><button>active</button></div>
          <div className="todo-delete-btn" onClick={handleDelete}>x</div></div>
</div>


    </div>
        ))}
    </div>
  )
}