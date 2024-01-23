import { configureStore } from '@reduxjs/toolkit'
import  SliceCompo  from "./SliceCompo";

export  const store = configureStore({
    reducer: {
        userData:SliceCompo,
    },
})