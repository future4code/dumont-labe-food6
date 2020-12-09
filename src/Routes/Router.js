
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../Screens/EnterSection/HomePage";
import LoginPage from "../Screens/EnterSection/LoginPage";
import Error from "../Screens/Error/Error";
import FeedPage from "../Screens/Home/FeedPage";
import SignUp from "../Screens/EnterSection/SignUpPage"
import ShoppingCart from "../Screens/EnterSection/ShoppingCart"

import Restaurant from "../Screens/Restaurants/RestaurantPage";

import AdressPage from "../Screens/EnterSection/AdressPage";
import ProfilePage from "../Screens/ProfileUser/ProfilePage"
import AddressEditPage from "../Screens/ProfileUser/AddressEditPage"
import SignUpEditPage from "../Screens/ProfileUser/SignUpEditPage"


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUp />
        </Route>
        <Route exact path="/cadastro/endereco">
          <AdressPage />
        </Route>
        <Route exact path="/pagina-principal">
          <FeedPage />
        </Route>
        <Route exact path="/meu-perfil">
          <ProfilePage />
        </Route>
        <Route exact path="/editar-endereco">
          <AddressEditPage />
        </Route>
        <Route exact path="/editar-cadastro">
          <SignUpEditPage />
          </Route>
        <Route exact path="/carrinho">
        <ShoppingCart />
        </Route>
        <Route exact path="/restaurantes">
          <Restaurant />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

