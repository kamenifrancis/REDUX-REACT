import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from '../Redux/Todo'
const TodoAdd = () => {
  const [text,setText]=useState('')
  const dispatch = useDispatch()
  const handelAdd=()=>{
    dispatch (addTask(text))
    setText('')
  }
  return (
    <div>
        <div className="form">
            <input type="text" className="input" value={text}  onChange={(e)=>setText(e.target.value)} />
          <button className="add" onClick={()=>handelAdd()}>Add </button>
        </div>
    </div>
  )
}

export default TodoAdd