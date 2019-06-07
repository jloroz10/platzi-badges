import React from 'react';

import NavBar from '../components/Navbar';
import headerImg from '../images/badge-header.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import './styles/BadgeNew.css';
class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <NavBar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={headerImg} alt="header logo"/>
                </div>
                <div className="container">
                    <div className="row">
                            <div className="col-12 col-md-6">
                                <BadgeForm />
                            </div>
                            <div className="col-12 col-md-6">
                                <Badge  className="col-5"
                                        firstName="Jose" 
                                        lastName="Orozco" 
                                        jobTitle="Fronend Enginee" 
                                        twitter="jloroz10"
                                        footerMsg="#platziconf"
                                        avatarUrl="https://www.gravatar.com/avatar/1b11e78f239b7ccf5b9071ff6f4f87ff" />
                            </div>

                          
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;