import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        arr: {
            inputtxt:"",
            lastName:"",
            address:"",
            email:"",
            number:""
        },
    }


export const SliceCompo = createSlice({
    name:"userData",
    initialState,
    reducers:{
        addValue : (state, {payload})=>{
            state.arr.inputtxt = payload.inputtxt
            state.arr.lastName = payload.lastName
            state.arr.address = payload.address
            state.arr.email = payload.email
            state.arr.number = payload.number
        },
        deleteValue : (state, {payload}) =>{
            console.log(payload)
            state.arr.inputtxt = ""
            state.arr.lastName = ""
            state.arr.address = ""
            state.arr.email = ""
            state.arr.number = ""
        },
        updateValue: (state, {payload})=>{
            state.arr.inputtxt = payload.inputtxt;
            state.arr.lastName = payload.lastName;
            state.arr.address = payload.address;
            state.arr.email = payload.email;
            state.arr.number = payload.number;
        }
    }
})

export const {addValue, deleteValue, updateValue} = SliceCompo.actions;
export default SliceCompo.reducer;