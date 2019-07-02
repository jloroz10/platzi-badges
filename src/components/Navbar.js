import React from 'react';
import Logo from '../images/logo.svg';

import {Link} from 'react-router-dom';
import './styles/Navbar.css';
class NavBar extends React.Component{
    render(){
        return (
           <div className="Navbar">
               <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__" src={Logo} alt="Logo"/>
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>
               </div>
           </div>
        )
    }
}

export default NavBar;