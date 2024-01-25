import { createSlice } from '@reduxjs/toolkit'

    const initialState = {
        formData: {
            firstName:"",
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
            state.formData.firstName = payload.firstName
            state.formData.lastName = payload.lastName
            state.formData.address = payload.address
            state.formData.email = payload.email
            state.formData.number = payload.number
        },
        deleteValue : (state, {payload}) =>{
            state.formData.firstName = ""
            state.formData.lastName = ""
            state.formData.address = ""
            state.formData.email = ""
            state.formData.number = ""
        },
        updateValue: (state, {payload})=>{
            state.formData.firstName = payload.firstName;
            state.formData.lastName = payload.lastName;
            state.formData.address = payload.address;
            state.formData.email = payload.email;
            state.formData.number = payload.number;
        }
    }
})

export const {addValue, deleteValue, updateValue} = SliceCompo.actions;
export default SliceCompo.reducer;