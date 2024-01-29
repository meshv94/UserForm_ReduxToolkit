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
    const lnamefield = useRef();
    const phonefield = useRef();
    const cancleBtn = useRef();
    const err_fname = useRef();
    const err_lname = useRef();
    const err_phone = useRef();
   // console.log(cancleBtn.current)


    

    const handleFormSubmit = (e)=>{
        e.preventDefault();

        if((firstName.length >= 5 && firstName.length <= 10 ) === false){
            err_fname.current.style.display = "block"
            fnamefield.current.focus()
        }else if((lastName.length >= 5 && lastName.length <= 10 ) === false){
            err_lname.current.style.display = "block"
            lnamefield.current.focus()
        }else if((/^[789][0-9]{9}$/.test(number)) === false){
            err_phone.current.style.display = "block"
            phonefield.current.focus()
        }else{
            dispatch(addValue({firstName, lastName,address,email,number}))
            setFirstName("")
            setLastName("")
            setAddress("")
            setEmail("")
            setNumber("")
            cancleBtn.current.setAttribute('disabled', true)
            err_fname.current.style.display = "none"
            err_lname.current.style.display = "none"
            err_phone.current.style.display = "none"
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
    
    const clearFormData = ()=>{
        setFirstName("")
        setLastName("")
        setAddress("")
        setEmail("")
        setNumber("")
    }

    return (
        <>
            <div className="form_box container form-box my-4">

                <form action="" className="row g-3" onSubmit={handleFormSubmit}>
                    <div className="row g-3">
                        <div className="col">
                            <input
                                onChange={(event)=> setFirstName(event.target.value.trim())}
                                value={firstName}
                                type="text"
                                required
                                ref={fnamefield}
                                className="form-control firstName"
                                placeholder="First name"
                                aria-label="First name"
                            />
                            <div className='error_field' id='error_fname' ref={err_fname}>
                                firstname must be atleast 5 characters long and atmost contains 10 characters
                            </div>
                        </div>
                        <div className="col">
                            <input
                            ref={lnamefield}
                                onChange={(event)=> setLastName(event.target.value.trim())}
                                value={lastName}
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                aria-label="Last name"
                            />
                            <div className='error_field' id='error_lname' ref={err_lname}>
                                lastname must be atleast 5 characters long and atmost contains 10 characters
                            </div>
                        </div>

                    </div>

                    <div className="row g-3">
                        <div className="col">
                        <input
                            onChange={(event)=> setEmail(event.target.value.trim())}
                            value={email}
                            type="email"
                            required
                            className="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                        />
                        </div>
                        <div className="col">
                        <input
                            onChange={(event)=> setNumber(event.target.value)}
                            value={number}
                            ref={phonefield}
                            type="number"
                            className="form-control"
                            id="number"
                            placeholder="Phone"
                        />
                        <div className='error_field' id='error_phone' ref={err_phone}>
                                please enter valid phone number
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col">
                        <input
                        onChange={(event)=> setAddress(event.target.value.trim())}
                        value={address}
                            type="text"
                            className="form-control my-1"
                            id="inputAddress"
                            placeholder="Address"
                        />
                        </div>
                    </div>

                    <div className="btn-group">
                        <button type="submit" defaultValue="Submit" className='my-3 mx-3 btn btn-primary'>Submit</button>
                        <button type="clear" id="clearBtn" className='my-3 btn btn-danger' onClick={()=>{clearFormData()}}>Clear</button>
                        <button ref={cancleBtn} type="cancle" id="canclebtn" className='my-3 mx-3 btn btn-dark' disabled>Cancel</button>
                    </div>
                </form>
            </div>
            <div className="user_content container">
                <Show  updateData={updateData}/>
            </div>
                
        </>
    )
}
