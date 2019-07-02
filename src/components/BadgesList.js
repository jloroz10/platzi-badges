import React from 'react';
import './styles/BadgesList.css';

import twitterLogo from '../images/twitter_logo.png';
class BadgesList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map(badge=>{
                        return( <li className="BadgesList__element" key={badge.id}>
                                    <img src={badge.avatarUrl}/>
                                    <div>
                                        <h4>{badge.firstName} {badge.lastName}</h4>
                                        <div>
                                            <img src={twitterLogo}/>
                                            <span className="twitter">{badge.twitter}</span>
                                        </div>
                                        <h5>{badge.jobTitle}</h5>
                                       
                                    </div>
                                </li>
                        )
                    })
                }
            </ul>
        );
    }
}

export default BadgesList;