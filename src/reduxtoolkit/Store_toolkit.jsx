
import { configureStore } from "@reduxjs/toolkit";
import countReducer from './reducer/count'

export default configureStore({
    reducer: {
        counter: countReducer
    },
})