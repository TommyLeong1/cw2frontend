import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'

const EditCat = () => {
    const [Data, setData] = useState([]);
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Edit Photo
    const [ViewEdit2, SetEditShow2] = useState(false)
    const handleEditShow2 = () => { SetEditShow2(true) }
    const hanldeEditClose2 = () => { SetEditShow2(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [id, setid] = useState("")
    const [title, settitle] = useState("")
    const [fullText, setfullText] = useState("")
    const [description, setdescription] = useState("")
    const [comments, setcomments] = useState("")
    const [likes, setlikes] = useState("")
    const [imgURL, setimgURL] = useState("")
    const [imgURL2, setimgURL2] = useState("")
    const [summary, setsummary] = useState("")
    const [breed, setbreed] = useState("")

    const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const result = reader.result;
        setimgURL2(result);
    };
};

    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const GetCatPostData = () => {
        //get all catpost data
        const url = 'https://cw2backend.tommyleong1.repl.co/catposts'
        axios.get(url)
            .then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== '200') {
                    alert(message, status)
                }
                else {
                    setData(data)
                    console.log(data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    const handleSubmite = () => {
        const url = 'https://cw2backend.tommyleong1.repl.co/catposts'
        const Credentials = { id, title, fullText, description, comments, likes, imgURL, summary, breed }
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
    const handleEdit = () =>{
        const url = `https://cw2backend.tommyleong1.repl.co/catposts/${id}`
        const Credentials = { id, title, fullText, description, comments, likes, imgURL, summary, breed }
        axios.patch(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
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
    //handle Delete Function 
    const handleDelete = () =>{
        const url = `https://cw2backend.tommyleong1.repl.co/catposts/${id}`
        axios.delete(url)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
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
    const handlePhotoEdit = () =>{
      
        const url = `https://cw2backend.tommyleong1.repl.co/catposts/${id}`
        const Credentials = { imgURL2 }
        axios.patch(url, Credentials)
            .then(response => {
                const result = response.data;
                const { status, message } = result;
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
        GetCatPostData();
    }, [])
    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Cat Post
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Summary</th>                                                    <th>Breed</th>
                                <th>ImgURL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.summary}</td>
                                    <td>{item.breed}</td>
                                    <td>{item.imgURL}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setid(item._id))}}>Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setid(item._id), setDelete(true))}}>Delete</Button>|<Button size='sm' variant='success' onClick={()=> {handleEditShow2(SetRowData(item),setid(item._id))}}>Upload Photo</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* View Modal */}
            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>View Cat Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' value={RowData.id} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.title} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.summary} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.breed} readOnly />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' value={RowData.imgURL} readOnly />
                            </div>
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete}>Delete Cat Post</Button>
                                )
                            }
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for submit data to database */}
            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add new Cat Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setid(e.target.value)} placeholder="Please enter ID" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} placeholder="Please enter Title" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setfullText(e.target.value)} placeholder="Please enter Full Text" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setdescription(e.target.value)} placeholder="Please enter Description" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setcomments(e.target.value)} placeholder="Please enter Comments" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setlikes(e.target.value)} placeholder="Please enter Likes" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setimgURL(e.target.value)} placeholder="Please enter ImgURL" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setsummary(e.target.value)} placeholder="Please enter Summary" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setbreed(e.target.value)} placeholder="Please enter Breed" />
                            </div>
                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Cat Post</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            {/* Modal for Edit catpost record */}
            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Cat Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="text" className='form-control' onChange={(e) => setid(e.target.value)} placeholder="Please enter ID" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => settitle(e.target.value)} placeholder="Please enter Title" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setfullText(e.target.value)} placeholder="Please enter Full Text" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setdescription(e.target.value)} placeholder="Please enter Description" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setcomments(e.target.value)} placeholder="Please enter Comments" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setlikes(e.target.value)} placeholder="Please enter Likes" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setimgURL(e.target.value)} placeholder="Please enter ImgURL" />
                            </div>
                          <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setsummary(e.target.value)} placeholder="Please enter Summary" />
                            </div>
                            <div className='form-group mt-3'>
                                <input type="text" className='form-control' onChange={(e) => setbreed(e.target.value)} placeholder="Please enter Breed" />
                            </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Cat Post</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
          {/* Modal for Edit catpost photo */}
            <div className='model-box-view4'>
                <Modal
                    show={ViewEdit2}
                    onHide={hanldeEditClose2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Cat Post Photo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                <input type="file" onChange={handleFileUpload} />
                              </div>
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handlePhotoEdit}>Edit Cat Post Photo</Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose2}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default EditCat;