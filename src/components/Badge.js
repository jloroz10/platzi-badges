import React from 'react'
import confLogo from '../images/badge-header.svg'; //importando imagen

import './styles/Badge.css';

class Badge extends React.Component {

    render() {
        return ( 
           <div className="Badge">
               {/* Cuando queramos agregar una clase en JSX debemos usar className porque JSX ya usa la palabra reservada class */}
               <div className="Badge__header">
                   {/*A source no le podemos pasar un string, le tenemos que pasar el valor de confLogo para lo evalue como expresion */}
                   <img src={confLogo} alt="Logo de la conferencia" />
               </div>

               <div className='Badge__section-name'>
                   <img className='Badge__avatar' src={this.props.avatarUrl} alt="Avatar"/>
                   <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
               </div>

               <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    {this.props.footerMsg}
                </div>
           </div>
        );
    }
}


        export default Badge;