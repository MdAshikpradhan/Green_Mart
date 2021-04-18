import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Admin from './Components/Admin/Admin/Admin';
import ServiceList from './Components/Admin/ServiceList/ServiceList';
import AddReviews from './Components/Admin/AddReviews/AddReviews';
import ServiceManage from './Components/Admin/ServiceManage/ServiceManage';
import Services from './Components/Admin/Services/Services';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import AddServices from './Components/Admin/AddServices/AddServices';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/serviceList">
            <ServiceList />
          </Route>
          <Route path="/manage">
            <ServiceManage />
          </Route>
          <Route path="/addReviews">
            <AddReviews />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
            <Admin /> 
          </PrivateRoute>
          <Route path="/addServices">
            <AddServices />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
