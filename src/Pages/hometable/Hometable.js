import React from 'react'
import { Card, Col, Dropdown, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../hometable/hometable.css'




function Hometable() {
  return (
    <div className='container mt-5'>
        <Row>
            <Col>
            <Card className='shadow'>
                <Table className='align-center' responsive="sm">
                <thead className='thead-dark'>
        <tr className='table-dark'>
          <th>ID</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Profile</th>

          <th>Acion</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@Otto</td>
          <td>M</td>
          <td>
          <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
       Active
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Active</Dropdown.Item>
        <Dropdown.Item >Inactive</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
          </td>
          <td className=''>
            <img className='rounded' style={{width:'50px',height:'50px'}}  src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png"  alt="" />
          </td>
          <td>
          <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
      <i class="fa-solid fa-ellipsis-vertical"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to={'profile/5'} className='text-decoration-none'>Active</Link></Dropdown.Item>
        <Dropdown.Item ><Link to={'edit/6'} className='text-decoration-none'>Edit</Link ></Dropdown.Item>
        <Dropdown.Item ><Link to={'delete/6'} className='text-decoration-none'>Delete</Link></Dropdown.Item>

        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>

          </td>
        </tr>
        </tbody>

                </Table>

            </Card>

            </Col>
        </Row>
    </div>
  )
}

export default Hometable