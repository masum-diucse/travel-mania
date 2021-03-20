import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../resources/images/logo.png';
import './Header.css';
const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div>
            <Navbar  variant="light">
            <Navbar.Brand href="">
                <img className="backgroundImage-height" src={logo} alt=""/>
            </Navbar.Brand>
            <Nav className="">
            <Link to="/home" className="m-1 font-weight-bold text-decoration-none text-black">Home</Link>
            <Link to="" className="m-1 font-weight-bold text-decoration-none text-black">Destination</Link>
            {   
                loggedInUser.signedInUser?
                <h4 className="ml-4">{loggedInUser.name}</h4> 
                :
                <Link to="/login" className="ml-4"><Button variant="success">Login</Button></Link>
                
                    
            }
            </Nav>            
            </Navbar>
        </div>
    );
};

export default Header;