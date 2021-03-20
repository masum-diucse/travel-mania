import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../resources/images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar  variant="light">
            <Navbar.Brand href="">
                <img className="backgroundImage-height" src={logo} alt=""/>
            </Navbar.Brand>
            <Nav className="">
            <Link to="/home" className="m-1 font-weight-bold text-decoration-none text-black">Home</Link>
            <Link to="/destination" className="m-1 font-weight-bold text-decoration-none text-black">Destination</Link>
            <Link to="/login" className="ml-4">
            <Button variant="success">Login</Button>
            </Link>
            </Nav>            
            </Navbar>
        </div>
    );
};

export default Header;