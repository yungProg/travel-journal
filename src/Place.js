import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Place = (props) => {
console.log(props.item)

    return(
        <div className="main-div">
            <div>
            <section className="card">
                <div><img src={props.item.locImg} alt={props.item.location} className="place-img" /></div>
            <div><span className="span"><FontAwesomeIcon icon={faLocationDot} className="location-dot" /><h3>{props.item.country}</h3> <a href={props.item.gMap} className="g-map">View on Google Maps</a></span> 
            <h1 className="loc">{props.item.location}</h1>
            <p className="date">{props.item.date}</p>
            <p className="description">{props.item.description}</p>
            </div>
           </section>
           <hr></hr>
           </div>
        </div>
    )
}

export default Place