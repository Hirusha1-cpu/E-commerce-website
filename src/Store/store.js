import {configureStore} from "@reduxjs/toolkit";
import categoryReducer from './ReduxSlice/categorySlice'

const store = configureStore({
    reducer:{

        category:categoryReducer,
    }
})
export default store;