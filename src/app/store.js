import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counterSlice'

//create the Redux Store and add Reducers
export const store = configureStore({
    reducer: {
        counter: counterReducer // Registering our slice reducer.
        
        //counterSlice was renamed was counterReducer for naming convention.
    }
})

export default store