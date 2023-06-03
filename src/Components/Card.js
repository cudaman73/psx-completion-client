import React from "react";

function Card(props) {
    return (
        <div className="card text-bg-primary mb-3">
            <img src={props.url} className="card-img-top" alt="game cover thumbnail" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"></p>
            </div>
        </div>   
    )
}

export default Card;
