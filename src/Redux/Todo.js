import { createSlice } from '@reduxjs/toolkit'
import {v4 as uuidv4} from 'uuid'
export const todoSlice = createSlice({
    name: 'todo',
    initialState: [
      {id:1, text:"todo 1" ,isDone:false},
      {id:2, text:"todo 2" ,isDone:false},
      {id:3, text:"todo 3" ,isDone:false}
    ],
    reducers: {
        addTask:(state,action)=>{
            const newTask={
                id:uuidv4(),
                isDone:false,
                text:action.payload
            }
            state.push(newTask)

        },
        toggelTask:(state,action)=>{
            const task=state.find((el)=>el.id === action.payload)
            task.isDone =! task.isDone
        },
        deleteTask:(state,action)=>{
state=state.filter((el)=>el.id !== action.payload)
return state
        },
    },
  })
        export const { addTask, toggelTask, deleteTask } = todoSlice.actions

export default todoSlice.reducer