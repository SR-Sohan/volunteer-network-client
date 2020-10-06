import React, { useEffect, useState } from 'react';

const SingleVolunteerData = () => {

    // Item delete state
    const [dell,setDell] = useState(false);

    // Volunteer List STate
    const [volunterList,setVolunteerList] = useState([]);
    
    // Load volunteer item
    useEffect(()=>{
        fetch('https://hidden-inlet-49035.herokuapp.com/volunteerList')
        .then( res => res.json())
        .then( data => setVolunteerList(data))
    },[dell])

    // Delete Volunteer Function
    const deleteUserEvent = (id) =>{
        fetch(`https://hidden-inlet-49035.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then( res => res.json())
        .then( data => {
           setDell(!dell)
        })
    }


    return (
        <>
     { volunterList.map( item => <tr key={item._id}>
            <td>{item.data.name}</td>
            <td>{item.data.email}</td>
            <td>{item.data.date}</td>
            <td>{item.data.category}</td>
            <td onClick={() => deleteUserEvent(item._id )}><img style={{backgroundColor: 'red', width: '21px',height: '21px',padding: '3px'}} src={require('../../logos/trash-2 9.png')} alt=""/></td>
        </tr>)  }
     </>
    );
};

export default SingleVolunteerData;