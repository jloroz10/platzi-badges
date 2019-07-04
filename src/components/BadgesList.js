import React from 'react';
import './styles/BadgesList.css';

import {Link} from 'react-router-dom';
import twitterLogo from '../images/twitter_logo.png';

import Gravatar from './Gravatar';
class BadgesList extends React.Component{

    render(){
        if(this.props.badges.length===0){
            return(
                <div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crear un nuevo badge
                    </Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map(badge=>{
                        return( <li className="BadgesList__element" key={badge.id}>
                                <Link className='text-reset text-decoration-none'to={`/badges/${badge.id}`}>
                                    <Gravatar className="Badge__avatar" email={badge.email} />
                                    <div className="Badge__info">
                                        <h4>{badge.firstName} {badge.lastName}</h4>
                                        <div>
                                            <img src={twitterLogo}/>
                                            <span className="twitter">{badge.twitter}</span>
                                        </div>
                                        <h5>{badge.jobTitle}</h5>
                                       
                                    </div>
                                </Link>
                                </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default BadgesList;