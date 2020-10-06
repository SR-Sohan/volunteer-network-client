import React, { useContext } from 'react';
import './Headers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Headers = () => {

    //User Context and History
    const {state1,state2} = useContext(UserContext)
    const [loggedInUser,setLoggedInUser] = state1;
    const [volunteerItem,setVolunteerItem] = state2;
    console.log(volunteerItem);
    return (
       <div className="header-area"> 
            <Container>
                <Navbar collapseOnSelect expand="lg"  variant="dark">
                    <Navbar.Brand >
                        <Link to="/home"> 
                            <img src={require('../../logos/Group 1329.png')} alt=""/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="menu-item">
                            <Link to="">Home</Link>
                            <Link to="">Donation</Link>
                            <Link to="/eventasks">Events</Link>
                            <Link to="">Blog</Link>
                        </Nav>
                       { loggedInUser.email ? <div className="user-name"> 
                                <p>{loggedInUser.name}</p>
                            </div> : <Nav className="reseter-user"> 
                           
                                <div className="register reg-ad-style"> 
                                    <Link  className="text-white"  to={"/register/" + "5f797b81fc5b8a264cabe796"}>Register</Link>
                                </div>
                                <div  className="admin reg-ad-style"> 
                                    <Link className="text-white" to="/volunteerRegisterlist">Admin</Link>
                                </div>
                            
                        </Nav>}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
       </div>
    );
};

export default Headers;