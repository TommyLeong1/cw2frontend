import React, { useEffect,useState } from 'react';
import {Button} from 'react-bootstrap'
import axios from 'axios'
import Modal from 'modal';

const Employee = () => {
  const [Data,setData] = useState([]);
  const [RowData,SetRowData] = useState([])
  const [ViewShow,SetViewShow] = useState(false)
  const handleViewShow = () => {SetViewShow(true)}
  const handleViewClose = () => {SetViewShow(false)}

  const GetEmployeeData = () => {
    //get all employee data
    const url = 'https://cw2backend.tommyleong1.repl.co/employees'
    axios.get(url)
      .then(response =>{
        const result = response.data;
        const {status, message, data}= result;
        if (status !== '200'){
          alert(message,status)
        }
        else{
          setData(data)
          console.log(data)
        }
      })
      .catch(err =>{
        console.log(err)
      })
  }
  //call this function in useEffect 

  useEffect(() => {
      GetEmployeeData();
  },[])
  return (
    <div>
      <div className='row'>
        <div className='mt-5 mb-4'>
          <Button variant='primary'><i className='fa fa-plu'></i>
            Add New Employee
          </Button>
        </div>
      </div>
      <div className='row'>
        <div className='table-responsive'>
          <table className='table table-strip table-hover table-bordered'>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Username</th>
                <th>About</th>
                <th>DateRegistered</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) =>
              <tr key={item._id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.username}</td>
                <td>{item.about}</td>
                <td>{item.dateRegistered}</td>
                <td>{item.email}</td>
                <td style = {{minWidth:190}}>
                <Button size='sm' variant='primary' onclick={() => {handleViewShow(SetRowData(item))}}>View</Button>
                <Button size='sm' variant='warning'>Edit</Button>
                <Button size='sm' variant='danger'>Delete</Button>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className='model-box-view'>
        <Modal
          show={ViewShow}
          onHide={handleViewClose}
          backdrop="static"
          keyboard={false}
        >
        <Modal.Header closeButton>
          <Modal.Title>View Employee Data</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <div>
              <div className='form-group'>
                <input type="text" className='form-control' value={RowData.firstName} readOnly/>
              </div>
              <div className='form-group mt-3'>
                <input type="text" className='form-control' value={RowData.lastName} readOnly/>
              </div>
              <div className='form-group mt-3'>
                <input type="text" className='form-control' value={RowData.username} readOnly/>
              </div>
              <div className='form-group mt-3'>
                <input type="text" className='form-control' value={RowData.About} readOnly/>
              </div>
              <div className='form-group mt-3'>
                <input type="date" className='form-control' value={RowData.DateRegistered} readOnly/>
              </div>
              <div className='form-group mt-3'>
                <input type="email" className='form-control' value={RowData.email} readOnly/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onclick={handleViewClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Employee;