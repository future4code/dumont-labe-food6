import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Screens/EnterSection/HomePage'
import LoginPage from '../Screens/EnterSection/LoginPage'


function Router() {
    return (
  <BrowserRouter>
  <Switch>
      
  <Route exact path='/'>
      <HomePage/>
  </Route>
  <Route exact path='/LoginPage'>
      <LoginPage/>
  </Route>

  <Route>
      <div>Erro:404</div>
  </Route>
  
  </Switch>
  </BrowserRouter>
    )
  }
  
  export default Router;