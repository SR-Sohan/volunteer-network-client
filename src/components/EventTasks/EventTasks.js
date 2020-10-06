import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Headers from '../Headers/Headers';
import SingleEvents from '../SingleEvents/SingleEvents';
import './EventTasks.css'

const EventTasks = () => {
    // Delete Item State
    const [dellVol,setDellVol] = useState(false);
    
    // VolunteerList State
    const [volunterList,setVolunteerList] = useState([])

    //User Context Hook
    const {state1,state2} = useContext(UserContext);
    const [loggedInUser,setLoggedInUser] = state1;

    // Load data by useEffect
    useEffect(()=>{
        fetch('https://hidden-inlet-49035.herokuapp.com/eventList?email=' + loggedInUser.email)
        .then( res => res.json())
        .then( data => setVolunteerList(data))
    },[dellVol])

   
    // Delete item button Function
    const eventDelete = (id) =>{
        fetch(`https://hidden-inlet-49035.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
            setDellVol(!dellVol)
        })
    }
   

    return (
        <div className="eventtasks-area">
            <Headers/>
            <Container> 
                <div className="row"> 
                    {
                        volunterList.map( item =>   <SingleEvents eventDelete={eventDelete} key={item._id} data={item}></SingleEvents>  )
                    }
                </div>
            </Container>
        </div>
    );
};

export default EventTasks;