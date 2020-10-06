import React, { useContext, useEffect } from 'react';
import { Button, Container, Form, FormControl } from 'react-bootstrap';
import Headers from '../Headers/Headers';
import './Home.css';
import ShowPost from '../ShowPost/ShowPost';
import { UserContext } from '../../App';

const Home = () => {
    //User Context Hook
    const {state1,state2} = useContext(UserContext)
    const [volunteerItem, setVlunteerItem] = state2;

    useEffect(()=>{
        fetch('https://hidden-inlet-49035.herokuapp.com/volunteerItem')
        .then( res => res.json())
        .then( data => setVlunteerItem(data))
    },[])
    
    return (
        <div className="home-area">
            <Headers/>
            <Container> 
                <div className="banner-area text-center"> 
                    <h1>I grow by helping people in need.</h1>
                   
                    <Form inline className=" d-flex justify-content-center">
                        <div className="form-input"> 
                            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                            <div className="form-btn"> 
                                <Button type="submit">Search</Button>
                            </div>
                        </div>
                        
                    </Form>
                </div>
                <div className="row"> 
                    {volunteerItem.map( data => <ShowPost key={data._id} data={data}></ShowPost>)}
                </div>
            </Container>
        </div>
    );
};

export default Home;