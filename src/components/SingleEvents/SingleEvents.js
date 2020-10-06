import React, { useEffect, useState } from 'react';
import './SingleEvents.css'

const SingleEvents = (props) => {
    
    //Props distructing
    const {_id,id,data} = props.data
    const {date,category} = data;

    // volunter set state
    const [volunter,setVolunteer] = useState([])

    // Volunteer img load useEffect
    useEffect(()=>{
        fetch('https://hidden-inlet-49035.herokuapp.com/volunteerId')
        .then( res => res.json())
        .then( data => {
            const volImg = data.find( item => item._id === id)
            setVolunteer(volImg)
           
        })
    },[])
  
  
    return (
        <div  className="col-lg-6 delete-item ">
            <div className="d-flex mt-4 bg-white p-4"> 
                <div className="img"> 
                    <img src={volunter.img} alt=""/>
                </div>
                <div className="title"> 
                    <p>{category}</p>
                    <span>{date}</span>
                </div>
            </div>
        <button  onClick={ ()=>  props.eventDelete(_id) }>Cancel</button>
    </div>
    );
};

export default SingleEvents;