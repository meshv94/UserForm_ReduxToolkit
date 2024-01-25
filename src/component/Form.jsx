import React, { useState, useRef } from 'react'
import Show from './Show';
import { useSelector, useDispatch } from 'react-redux'
import { addValue, updateValue } from '../redux/SliceCompo';

export default function Form() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    

    const formData = useSelector((state) => state.userData.formData)
    
    //console.log(formData)
    const dispatch = useDispatch()

    const fnamefield = useRef();
    const phonefield = useRef();
    const cancleBtn = useRef();
   // console.log(cancleBtn.current)


    

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if(firstName.length >= 5 && /[0-9]{10}/.test(number)){
            dispatch(addValue({firstName, lastName,address,email,number}))
            setFirstName("")
            setLastName("")
            setAddress("")
            setEmail("")
            setNumber("")
            cancleBtn.current.setAttribute('disabled', true)
        }else{
            if((firstName.length >= 5) === false){
                alert("Firstname must be at least 5 characters long")
                fnamefield.current.focus()
            }
            if((/[0-9]{10}/.test(number)) === false){
                alert("Phone must be of 10 digits")
                phonefield.current.focus()
            }
        }
    }

    const updateData = ()=>{
        dispatch(updateValue({firstName, lastName,address,email,number}))
        setFirstName(formData.firstName)
        setLastName(formData.lastName)
        setAddress(formData.address)
        setEmail(formData.email)
        setNumber(formData.number)
        cancleBtn.current.removeAttribute("disabled")
    }
    

    return (
        <>
            <div className="form_box container form-box my-5">

                <form action="" className="row g-3" onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                        <div className="col">
                            <input
                                onChange={(event)=> setFirstName(event.target.value)}
                                value={firstName}
                                type="text"
                                required
                                ref={fnamefield}
                                className="form-control firstName"
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
                            required
                            className="form-control my-2"
                            id="inputEmail4"
                            placeholder="Email"
                        />
                        <input
                            onChange={(event)=> setNumber(event.target.value)}
                            value={number}
                            ref={phonefield}
                            type="number"
                            className="form-control my-2"
                            id="number"
                            placeholder="Phone"
                        />
                    </div>
                    <div className="btn-group">
                        <button type="submit" defaultValue="Submit" className='my-3 mx-3 btn btn-primary'>Submit</button>
                        <button ref={cancleBtn} type="cancle" id="canclebtn" className='my-3 btn btn-dark' disabled>Cancel</button>
                    </div>
                </form>
            </div>
            <div className="user_content container">
                <Show  updateData={updateData}/>
            </div>
                
        </>
    )
}
