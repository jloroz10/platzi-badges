import React from 'react'

import confLogo from '../images/badge-header.svg'; //importando imagen
class Badge extends React.Component {

    render() {
        return ( 
           <div>
               <div>
                   {/*A source no le podemos pasar un string, le tenemos que pasar el valor de confLogo para lo evalue como expresion */}
                   <img src={confLogo} alt="Logo de la conferencia" />
               </div>

               <div>
                   <img src="" alt="Avatar"/>
                   <h1>Jose Luis <br/>Orozco</h1>
               </div>

               <div>
                    <p>Fronend Engineer</p>
                    <p>@jloroz10</p>
                </div>

                <div>
                    #platziconf
                </div>
           </div>
        );
    }
}


        export default Badge;