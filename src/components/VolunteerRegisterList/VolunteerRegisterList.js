import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddVolunteerForm from '../AddVolunteerForm.js/AddVolunteerForm';
import SingleVolunteerData from '../SingleVolunteerData/SingleVolunteerData';
import './VolunteerRegisterList.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faUser,faPlus)

const VolunteerRegisterList = () => {

    const [addVolunteer, setAddVolunteer] = useState(true)

 

    return (
        <div className="volunteer-list">
            <Container fluid> 
                <div className="row"> 
                    <div className="col-lg-3 bg-white"> 
                        <div className="left-volunteer-add-bar">
                            <div className="header-img"> 
                                <Link to="/home"> 
                                    <img src={require('../../logos/Group 1329.png')} alt=""/>
                                </Link>
                            </div>
                            <div style={addVolunteer ? {color: '#207FEE'} : {color: '#111111'}} onClick={()=> setAddVolunteer(true)} className="volunteer-request d-flex  mt-5"> 
                                <div className="icon"> 
                                <i class="fas fa-user-friends"></i>
                                <FontAwesomeIcon icon={"user"} />
                                </div>
                                <div className="text ml-2"> 
                                    <span>Volunteer register list</span>
                               </div>
                            </div>
                            <div style={ !addVolunteer ? {color: '#207FEE'} : {color: '#111111'}} onClick={()=> setAddVolunteer(false)} className="add-event d-flex mt-4"> 
                                <div className="event-icon"> 
                                <FontAwesomeIcon icon={"plus"} />
                                </div>
                                <div className="event-text ml-2">
                                    <span>Add Event</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9"> 
                        <div className="volunteer-text  bg-white p-3"> 
                            <p>Volunteer register list</p>
                        </div>

                       { addVolunteer ? <div className="list-user bg-white mt-5"> 
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Registating date</th>
                                <th>Volunteer list</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                               <SingleVolunteerData/>
                            </tbody>
                            </Table>
                        </div>
                         :
                        <div className="add-volunteer-form bg-white mt-5"> 
                            <AddVolunteerForm/>
                        </div>}

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default VolunteerRegisterList;