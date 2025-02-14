import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "../Slices/homeSlice";


const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
    },
})

export default store;