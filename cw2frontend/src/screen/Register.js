import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

const Register = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const handleViewClose = () => { SetViewShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const handlePostClose = () => { SetPostShow(false) }
  
    const [ViewPost2, SetPostShow2] = useState(false)
    const handlePostShow2 = () => { SetPostShow2(true) }
    const handlePostClose2 = () => { SetPostShow2(false) }
  
    const [ViewPost3, SetPostShow3] = useState(false)
    const handlePostShow3 = () => { SetPostShow3(true) }
    const handlePostClose3 = () => { SetPostShow3(false) }

    //Define here local state that store the form Data
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [username, setuserName] = useState("")
    const [about, setabout] = useState("")
    const [password, setpassword] = useState("")
    const [email, setemail] = useState("")
    const [avatarURL, setavatarURL] = useState("")
    const [signUpCode, setsignUpCode] = useState("")

    //Id for update record and Delete
    const [id,setId] = useState("");
    const GetData = () => {

    }
    const handleAdminSubmite = () => {
        const url = 'https://cw2backend.tommyleong1.repl.co/admins'
        const Credentials = { firstName, lastName, username, about, password, email, avatarURL, signUpCode }
        axios.post(url, Credentials)  
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== '200') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEmployeeSubmite = () => {
        const url = 'https://cw2backend.tommyleong1.repl.co/employees'
        const Credentials = { firstName, lastName, username, about, password, email, avatarURL, signUpCode }
        axios.post(url, Credentials)  
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== '200') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleUserSubmite = () => {
        const url = 'https://cw2backend.tommyleong1.repl.co/users'
        const Credentials = { firstName, lastName, username, about, password, email }
        axios.post(url, Credentials)  
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== '200') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    //call this function in useEffect
    console.log(ViewShow, RowData)
    useEffect(() => {
        GetData();
    }, [])
    return (
        <div>
            <div className='row1'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Register for Admin
                    </Button>
                </div>
            </div>
            
            {/* Modal for Admin register */}
            <div className='model-box-view1'>
                <Modal
                    show={ViewPost}
                    onHide={handlePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Admin Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group1'>
                                <input type="text" className='form-control' onChange={(e) => setfirstName(e.target.value)} placeholder="Please enter First Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setlastName(e.target.value)} placeholder="Please enter Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setuserName(e.target.value)} placeholder="Please enter User Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setabout(e.target.value)} placeholder="Please enter About" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="password" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter Password" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter Email" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setsignUpCode(e.target.value)} placeholder="Please enter Sign Up Code" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleAdminSubmite}>confirm</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handlePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

-------------------------------------------------------------------

          <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow2() }}><i className='fa fa-plu'></i>
                        Register for Employee
                    </Button>
                </div>
            </div>
            
            {/* Modal for employee register */}
            <div className='model-box-view2'>
                <Modal
                    show={ViewPost2}
                    onHide={handlePostClose2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Employee Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setfirstName(e.target.value)} placeholder="Please enter First Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setlastName(e.target.value)} placeholder="Please enter Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setuserName(e.target.value)} placeholder="Please enter User Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setabout(e.target.value)} placeholder="Please enter About" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="password" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter Password" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter Email" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setsignUpCode(e.target.value)} placeholder="Please enter Sign Up Code" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleEmployeeSubmite}>confirm</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handlePostClose2}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
-------------------------------------------------------------------
          <div className='row3'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow3() }}><i className='fa fa-plu'></i>
                        Register for User
                    </Button>
                </div>
            </div>
            
            {/* Modal for User register */}
            <div className='model-box-view3'>
                <Modal
                    show={ViewPost3}
                    onHide={handlePostClose3}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>User Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setfirstName(e.target.value)} placeholder="Please enter First Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setlastName(e.target.value)} placeholder="Please enter Last Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setuserName(e.target.value)} placeholder="Please enter User Name" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setabout(e.target.value)} placeholder="Please enter About" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="password" className='form-control' onChange={(e) => setpassword(e.target.value)} placeholder="Please enter Password" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="email" className='form-control' onChange={(e) => setemail(e.target.value)} placeholder="Please enter Email" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleUserSubmite}>confirm</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={handlePostClose3}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Register;