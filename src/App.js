import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import EventTasks from './components/EventTasks/EventTasks';
import VolunteerRegisterList from './components/VolunteerRegisterList/VolunteerRegisterList';


export const UserContext = createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState([])
  const [volunteerItem,setVolunteerItem] = useState([])
  return (
    <UserContext.Provider value={{
      state1:[loggedInUser,setLoggedInUser],
      state2:[volunteerItem,setVolunteerItem]
      }}>
      <Router> 
        <Switch> 
          <Route exact path='/'> 
             <Home/>
          </Route>
          <Route  path='/home'> 
              <Home/>
          </Route>
          <PrivateRoute path="/register/:id">
            <Register/>
          </PrivateRoute>
          <Route path="/login"> 
            <Login/>
          </Route>
          <PrivateRoute path="/eventasks"> 
            <EventTasks/>
          </PrivateRoute>
          <PrivateRoute path="/volunteerregisterlist"> 
              <VolunteerRegisterList/>
          </PrivateRoute>
          <Route path="*"> 
              <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
