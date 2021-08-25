 //https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
  //đổi tên folder và file khác nhau so với bài hướng dẫn, dấu chấm trc componets chỉ có 1 (không phải 2 như trong bài)
import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Preferences from './components/Preferences';

import userToken from './userToken';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function App(){
  

  const { token, setToken } = userToken();
 
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (

    
      <div className="wrapper">
        <h1>Application</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/preferences">
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    
  );
}

export default App;