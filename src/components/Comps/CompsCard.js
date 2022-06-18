import React from 'react';
import '../../App.css';

const CompsCard = (props) => {
    const  comps  = props.comp;
    return(
        <div className="card-container">
            <div className="desc" key={comps._id}>
                <h3>{comps.db_entry_date}</h3>
                <h3>{comps.location.street} | {comps.location.city} | {comps.location.county} | {comps.location.state}</h3>
            </div>
        </div>
    )
};

export default CompsCard;