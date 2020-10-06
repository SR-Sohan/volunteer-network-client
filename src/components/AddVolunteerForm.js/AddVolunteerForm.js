import React from 'react';
import { useForm } from "react-hook-form";


const AddVolunteerForm = () => {

    //Use Form Hook
    const { register, handleSubmit,  errors } = useForm();

    // Data Submit Function
    const onSubmit = data => {

        fetch('https://hidden-inlet-49035.herokuapp.com/addVolunteerItem',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        })
        .then( data => {
            if(data){
                alert('Your Update SuccessFully');
            }
        })
    };
  

    return (
        <div className="add-volunteer"> 
             <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <label htmlFor="category">Event Category:</label>
                    <br/>
                    <input className="pt-2 pb-2 pr-5 pl-2" id="category" name="title" ref={register({ required: true })} placeholder="Enter category..." />
                    <br/>
                    {errors.title && <span className="error">Please input title...</span>}

                    <br/> 
                    <label htmlFor="date">Event Date:</label>
                    <br/>
                    <input className="pt-2 pb-2 pr-5 pl-2"  id="date" name="date" type="date" ref={register({ required: true })} placeholder="Enter date..." />
                    <br/>
                    {errors.date && <span className="error">Please input date...</span>}
                    <br/>

                    <label htmlFor="img">Your img link:</label>
                    <br/>
                    <input className="pt-2 pb-2 pr-5 pl-2"  type="text" name="img" id="img" ref={register} placeholder="Please input img link..."/>
                    <br/>
                    
                
                    <input className="btn btn-primary mt-3 " type="submit" />
                </form>
        </div>
    );
};

export default AddVolunteerForm;