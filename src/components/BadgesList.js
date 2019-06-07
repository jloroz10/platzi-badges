import React from 'react';
import './styles/BadgesList.css';

class BadgesList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {
                    this.props.badges.map((badge)=>{
                        return( <li className="BadgesList__element" key={badge.id}>
                                    <img src={badge.avatarUrl}/>
                                    <div>
                                        <h4>{badge.firstName} {badge.lastName}</h4>
                                        <h5>{badge.jobTitle}</h5>
                                        <p>{badge.twitter}</p>
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