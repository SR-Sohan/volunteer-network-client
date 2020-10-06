import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import './Register.css'
import { UserContext } from '../../App';

const Register = () => {

    // React hook form method
    const { register, handleSubmit,  errors } = useForm();

    // User Context Hook
    const {state1,state2} = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = state1;

    // Set volunteer item id
    const [volId,setVolId] = useState({});

    // History and Use params hook
    const history = useHistory();
    const {id} = useParams();

    // Load volunteer 
    useEffect( () => {
        fetch('https://hidden-inlet-49035.herokuapp.com/volunteerId')
        .then( res => res.json())
        .then( data => {
           const findData = data.find( data => data._id === id)
           setVolId(findData);
        })
    },[id]);

    
    // Submit function 
    const onSubmit = data => {
            const volunteer = {...loggedInUser, data ,id}
            fetch('https://hidden-inlet-49035.herokuapp.com/addVolunteer',{
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(volunteer)
            })
            .then( res => res.json())
            .then( data => {
               if(data){
                history.push('/eventasks')
               }
            })
           
    };

    return (
        <div className="register-area">
            <Container> 
                <div className="logo-area"> 
                   <Link to="/home"> 
                   <img src={require('../../logos/Group 1329.png')} alt=""/>
                   </Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Register as a Volunteer</h2>
                    <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
                    {errors.name && <span className="error">Please write your name....</span>}

                    <input name="email" defaultValue={loggedInUser.email} ref={register({ 
                        required: true,
                        pattern: /\S+@\S+\.\S+/ 
                        })} placeholder="Username or Email" />
                    {errors.email && <span className="error">Please write correct email...</span>}

                    <input type="date" name="date" id="" ref={register({ required: true })} placeholder="Date"/>
                    {errors.date && <span className="error">Please write date...</span>}

                    <input type="text" name="desicription" ref={register({required: true})} placeholder="Desicription" />
                    {errors.desicription && <span className="error">Please write desicription...</span>}
                    
                    <input type="text" name="category" defaultValue={volId.title} ref={register({required: true})} placeholder="Category"/>
                    {errors.category && <span className="error">Category write category...</span>}
                    <input className="submit-btn" type="submit"  value="Registration" />
                </form>
            </Container>
        </div>
    );
};

export default Register;