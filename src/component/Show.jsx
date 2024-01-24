import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {deleteValue} from '../redux/SliceCompo'

export default function Show({updateData}) {

    const myArr = useSelector((state)=> state.userData.arr )
    const dispatch = useDispatch();

    const deleteData = (key)=>{
        dispatch(deleteValue(key))
    }

    return (
        <>
            {myArr && myArr.map((element, key) => {
                return <div className="d-flex justify-content-center mx-5 my-3"  key={key}>
                    <div className="card databox">
                        <div className="card-body">
                            <h5 className="card-title m-3 ">First name : {element.inputtxt}</h5><hr />
                            <h5 className="card-title m-3 ">Last name : {element.lastName}</h5><hr />
                            <h5 className="card-title m-3 ">Address : {element.address}</h5><hr />
                            <h5 className="card-title m-3 ">Email : {element.email}</h5><hr />
                            <h5 className="card-title m-3 ">Phone : {element.number}</h5><hr />
                            <button className='btn btn-danger mx-2 btn-sm' onClick={() => { deleteData(key) }}>Delete</button>
                            <button className='btn btn-success mx-2 btn-sm' onClick={() => { updateData(key) }}>Update</button>
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}
