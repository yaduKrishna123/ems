import React from 'react'
import './Home.css'
import { Form,Button,Col  } from 'react-bootstrap'
import Hometable from '../hometable/Hometable'

import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';




function Home() {
  const navigate=useNavigate()
  const adduser=()=>{
    navigate('/register')
  
  }
  return (
    <div>
      <div className="container mt-5">

        <div className="first_div d-flex justify-content-between">
          <div className="search">
            <form className='d-flex col-lg-10'>
            <Form.Control type="text" placeholder="Search" className='me-2' />
            <Button varient='prmary'>Search</Button>
            </form>
          </div>
          <div className="add_btn">
            <Button className='btn btn-warning' onClick={adduser}>
            <i class="fa-solid fa-user-plus fa-beat-fade"></i> Add user</Button>
          </div>
       
        </div>
        <div className="second_div">
          <Hometable/>
        </div>
      </div>
    </div>
  )
}

export default Home