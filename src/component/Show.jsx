import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteValue } from '../redux/SliceCompo'

export default function Show({ updateData }) {

    const formData = useSelector((state) => state.userData.formData)
    const dispatch = useDispatch();

    const deleteData = () => {
        dispatch(deleteValue())
    }

    return (
        <>
            <div className="d-flex justify-content-center mx-5 my-3">
                <div className="card databox">
                    <div className="card-body">
                        <h5 className="card-title m-3 ">First name : {formData.firstName}</h5><hr />
                        <h5 className="card-title m-3 ">Last name : {formData.lastName}</h5><hr />
                        <h5 className="card-title m-3 ">Address : {formData.address}</h5><hr />
                        <h5 className="card-title m-3 ">Email : {formData.email}</h5><hr />
                        <h5 className="card-title m-3 ">Phone : {formData.number}</h5><hr />
                        <button className='btn btn-danger mx-2 btn-sm' onClick={() => { deleteData() }}>Delete</button>
                        <button className='btn btn-success mx-2 btn-sm' onClick={() => { updateData() }}>Update</button>
                    </div>
                </div>
            </div>

        </>
    )
}
