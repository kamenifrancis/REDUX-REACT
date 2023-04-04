import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './Todo'
export default configureStore({
  reducer: {
    todo:todoSlice
  },
})