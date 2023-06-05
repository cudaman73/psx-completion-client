import React from "react";

function Card(props) {
    return (
        <div className="card text-bg-primary mb-3">
            <h5 className="card-header">{props.name}</h5>
            <img loading="lazy" src={props.url} className="card-img-top pt-2 px-2" alt="game cover thumbnail" />
            <div className="card-body">
                {/* <p className="card-text">{props.completed == true ?  "Uncomplete" : "Complete"}</p> */}
            </div>
        </div>   
    )
}

export default Card;
