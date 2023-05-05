import React from 'react'
import './Edit.css'
import { Card, Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select'

function Edit() {
  const option=[
    {value:'Active',label:'Active'},
    {value:'inactive',label:'inactive'}
  ]
  return (
    <>

    <div className="container mt-5">



      <h2 className='text-center'>Edit Register Details</h2>
      <Card className='shadow'>
        <div className="text-center">
          <img style={{width:'50px',height:'50px'}} className='border p-1 rounded-circle' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt=""  />
        </div>
      <Row>
      <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='ms-5'>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='ms-5'>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="last name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='ms-5'>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="email"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label className='ms-5'>Mobile</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="mobile"
          />
        </Form.Group>
        <Form.Group className='col-lg-8'  controlId="formbasicstatus">
          <Form.Label className='mb-3 col-lg-4' >Select Employee status</Form.Label>
          <Select className='col-lg-6' options={option}></Select>

          </Form.Group>
          <Form.Group className='col-lg-4'  controlId="formbasicfile">
          <Form.Label className='mb-3 col-lg-4' >Select Employee status</Form.Label>
         <Form.Control type='file' name='user_profile'></Form.Control>

          </Form.Group>
          <Form.Group className='col-lg-4 mt-4'  controlId="formbasiclocation">
          <Form.Label className='mb-3 col-lg-4' >Employeelocation</Form.Label>
         <Form.Control type='text' name='location'></Form.Control>

          </Form.Group>

    



        
      </Row>
      <Form.Group className='mb-3 col-lg-5' >
<Form.Label className='mt-2'>select gender</Form.Label>
<Form.Check className='ms-4'
   type={"radio"} 
   label={"Male"}
   value={"Male"}
   name={"gender"} />
   <Form.Check className='ms-5'
   type={"radio"} 
   label={"female"}
   value={"female"}
   name={"gender"} />
   <Form.Check className='ms-5'
   type={"radio"} 
   label={"others"}
   value={"others"}
   name={"gender"} />
        </Form.Group> 
 
      </Card>
    
    </div>
    
    
    </>
  )
}

export default Edit