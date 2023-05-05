import React from 'react'
import './Profile.css'
import { Card, Col, Row } from 'react-bootstrap'


function Profile() {
  return (
    <>

    <div className="container">
      <Card className='shadow col-lg-6'>
        <Card.Body>
          <Row>
            <div className="col">
              <div className="profile_img d-flex justify-content-center">


              <img style={{width:'100px',height:'100px'}} className='border p-1 rounded-circle' src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt=""  />

              </div>
            </div>
          </Row>
          <div className="text-center">

            <h3>demo name</h3>
            <h5><i class="fa-solid fa-envelope text-primary"></i> <span>someone@gmai.com</span></h5>
            <h5><i class="fa-solid fa-phone text-success"></i> <span>561131</span></h5>

            <h5><i class="fa-solid fa-venus text-warning"></i> <span>Gender</span></h5>

            <h5><i class="fa-solid fa-location-dot text-danger"></i><span>india</span></h5>

            <h5> <i class="fa-solid fa-chart-line text-success"></i> <span>Active</span></h5>

          </div>
        </Card.Body>

      </Card>

    </div>
    
    
    
    </>
  )
}

export default Profile