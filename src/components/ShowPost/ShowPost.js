import React from 'react';
import { useHistory } from 'react-router-dom';
import './ShowPost.css'


const ShowPost = (props) => {
    const {img,_id,title} = props.data

    const history = useHistory();

    // Handle Click post
    const handlePostClick = ()=>{
        history.push('/register/'+ _id)
   }

    return (
        <div onClick={handlePostClick} className="col-lg-3 col-md-6 col-sm-12">
            <div  style={{ backgroundImage:`url(${img})` }} className="single-post"> 

                <div className="show-title" style={{ backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}` }} > 
                  <p className="text-center">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ShowPost;