import { createSlice } from '@reduxjs/toolkit'



    const initialState = {
        arr: [],
    }


export const SliceCompo = createSlice({
    name:"userData",
    initialState,
    reducers:{
        addValue : (state, {payload})=>{
            state.arr.push(payload)
        },
        deleteValue : (state, {payload}) =>{
            console.log(payload)
            state.arr.splice(payload, payload+1)
        },
        updateValue: (state, {payload})=>{
            state.arr[payload.key].inputtxt = payload.inputtxt;
            state.arr[payload.key].lastName = payload.lastName;
            state.arr[payload.key].address = payload.address;
            state.arr[payload.key].email = payload.email;
            state.arr[payload.key].number = payload.number;
        }
    }
})

export const {addValue, deleteValue, updateValue} = SliceCompo.actions;
export default SliceCompo.reducer;