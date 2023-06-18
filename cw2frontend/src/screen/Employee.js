import React from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios'


const Employee = () => {
  const [Data,setData] = useState([]);
  const GetEmployeeData = () => {
    //get all employee data
    const url = 'https://cw2backend.tommyleong1.repl.co/employees'
    axios.get(url)
      .then(response =>{
        const result = response.data;
        const (status, message, data)= result;
        if (status !== "200"){
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
                <th>Password</th>
                <th>Email</th>
                <th>AvatarURL</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;