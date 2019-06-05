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
                   <img className='Badge__avatar' src="https://www.gravatar.com/avatar/1b11e78f239b7ccf5b9071ff6f4f87ff" alt="Avatar"/>
                   <h1>Luis <br/>Orozco</h1>
               </div>

               <div className="Badge__section-info">
                    <h3>Fronend Engineer</h3>
                    <div>@jloroz10</div>
                </div>

                <div className="Badge__footer">
                    #platziconf
                </div>
           </div>
        );
    }
}


        export default Badge;