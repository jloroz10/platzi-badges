import React from 'react';

import NavBar from '../components/Navbar';
import headerImg from '../images/badge-header.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import './styles/BadgeNew.css';

class BadgeNew extends React.Component{

    // para no ver el mensaje de que un elemento paso a no controlado
    // se deben inicializar las variables
    state = {
        form:{
            firstName:'',
            lastName:'',
            jobTitle:'',
            twitter:'',
            hashtag:''
        }
    }

    
    handleChange = e =>{
        this.setState({
            form:{
                //para que se copie el estado anterior antes de agregar un nuevo cambio,
                //de otro modo solo se tendria un atributo en el form
                ...this.state.form, 
                [e.target.name]:e.target.value
            }
        })
    }
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
                                <BadgeForm formValues={this.state.form} onChange={this.handleChange}/>
                            </div>
                            <div className="col-12 col-md-6">
                                <Badge  firstName={this.state.form.firstName} 
                                        lastName={this.state.form.lastName}
                                        jobTitle={this.state.form.jobTitle} 
                                        twitter={this.state.form.twitter}
                                        footerMsg={this.state.form.hashtag}
                                        avatarUrl="https://www.gravatar.com/avatar/1b11e78f239b7ccf5b9071ff6f4f87ff" />
                            </div>

                          
                    </div>
                </div>
            </div>
        );
    }
}

export default BadgeNew;