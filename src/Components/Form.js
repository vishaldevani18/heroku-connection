import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import HomePage from './HomePage';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
const Form = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" mb-3>
        <Navbar.Brand >The OneTechnologies </Navbar.Brand>
        <Navbar className="mr-auto m-2 p-3">
          <NavLink to="/React_Vishal/home">Home</NavLink>
          <span className="m-2">
          {" "}
            <NavLink to="/React_Vishal/contact">Contact</NavLink>
          </span>
          <NavLink to="/React_Vishal/aboutus">About Us</NavLink>{" "}
        </Navbar>
      </Navbar>
      <Switch>
        <Route exact path="/React_Vishal/home">
          <HomePage/>
        </Route>
        <Route path="/React_Vishal/contact">
          <ContactUs />
        </Route>
        <Route path="/React_Vishal/aboutus">
          <AboutUs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default Form;