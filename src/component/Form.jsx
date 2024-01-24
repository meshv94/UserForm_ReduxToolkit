import React, { useState } from 'react'
import Show from './Show';
import { useSelector, useDispatch } from 'react-redux'
import { addValue, deleteValue, updateValue } from '../redux/SliceCompo';

export default function Form() {

    const [inputtxt, setInputtxt] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    

    
    //console.log(myArr)
    const dispatch = useDispatch()

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        dispatch(addValue({inputtxt, lastName,address,email,number}))
        setInputtxt("")
        setLastName("")
        setAddress("")
        setEmail("")
        setNumber("")
    }

    const updateData = (key)=>{
        dispatch(updateValue({key,inputtxt, lastName,address,email,number}))
        setInputtxt("")
        setLastName("")
        setAddress("")
        setEmail("")
        setNumber("")
    }
    

    return (
        <>
            <div className="form_box container form-box my-5">

                <form action="" className="row g-3">
                    <div className="row g-3">
                        <div className="col">
                            <input
                                onChange={(event)=> setInputtxt(event.target.value)}
                                value={inputtxt}
                                type="text"
                                className="form-control inputtxt"
                                placeholder="First name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            <input
                                onChange={(event)=> setLastName(event.target.value)}
                                value={lastName}
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                aria-label="Last name"
                            />
                        </div>

                    </div>
                    <div className="col-12">
                        <input
                        onChange={(event)=> setAddress(event.target.value)}
                        value={address}
                            type="text"
                            className="form-control my-3"
                            id="inputAddress"
                            placeholder="Address"
                        />
                    </div>
                    <div className="col-md-6 my-2">
                        <input
                            onChange={(event)=> setEmail(event.target.value)}
                            value={email}
                            type="email"
                            className="form-control my-2"
                            id="inputEmail4"
                            placeholder="Email"
                        />
                        <input
                            onChange={(event)=> setNumber(event.target.value)}
                            value={number}
                            type="number"
                            className="form-control my-2"
                            id="number"
                            placeholder="Phone"
                        />
                    </div>

                    <input type="submit" defaultValue="Submit" className='my-3 btn btn-primary' onClick={handleFormSubmit}/>
                </form>
            </div>
            <div className="user_content container">
                <Show  updateData={updateData}/>
            </div>
                
        </>
    )
}
