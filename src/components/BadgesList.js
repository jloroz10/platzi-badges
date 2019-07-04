import React from 'react';
import './styles/BadgesList.css';

import {Link} from 'react-router-dom';
import twitterLogo from '../images/twitter_logo.png';

import Gravatar from './Gravatar';

function useSearchBadges(badges){
    
    const [query,setQuery] = React.useState('');

    const [filteredBadges,setFilteredBadges] = React.useState(badges);

     React.useMemo(() =>{
        const result = badges.filter(badge =>{
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        })

        setFilteredBadges(result);
    },[badges,query])

    return { badges,setQuery,filteredBadges};
}
function BadgesList(props){


    const badges = props.badges;

    const {query,setQuery,filteredBadges} = useSearchBadges(badges);
        if(filteredBadges.length===0){
            return(
                    <div>
                        <div className="form-group">
                            <label>Filter Badges</label>
                            <input type="text" 
                                className="form-control"
                                value={query}
                                onChange={e =>
                                    {
                                        setQuery(e.target.value)
                                    }}/>
                        </div>
                        <h3>No badges were found</h3>
                        <Link className="btn btn-primary" to="/badges/new">
                            Crear un nuevo badge
                        </Link>
                      
                    </div>
              
            )
        }
        return (
          <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                <input type="text" 
                       className="form-control"
                       value={query}
                       onChange={e =>
                        {
                            setQuery(e.target.value)
                        }}/>
            </div>
            <ul className="list-unstyled">
                {
                    filteredBadges.map(badge=>{
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
        </div>
        );
    
}

export default BadgesList;