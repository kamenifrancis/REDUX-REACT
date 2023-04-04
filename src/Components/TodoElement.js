import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTask, toggelTask} from '../Redux/Todo'

const TodoElement = ({todos}) => {
    console.log("e par e",todos)
    const Dispatch = useDispatch ()
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        <div className="tasks">{todos.text}</div>
        <div>

        <div className="delete-all" onClick={()=>Dispatch(deleteTask(todos.id))}>Delete</div>
        <div className="delete-all" onClick={()=>Dispatch(toggelTask(todos.id))}>{todos.isDone ? "Task Done" : "Not Yet"}</div>
            
        </div>
    </div>
  )
}

export default TodoElement