import React from "react";
import {Button} from "react-bootstrap";

function Card(props) {
    return (
        <div className="card text-bg-primary mb-3">
            <h5 className="card-header">{props.name}</h5>
            <img loading="lazy" src={props.url} className="card-img-top py-2 px-2" alt="game cover thumbnail" />
            <div className="card-body">
            {
                props.completed === true ? 
                <Button variant="danger" size="sm" onClick={() => toggleGameCompletion(props.name)}>Mark Incomplete</Button> :
                <Button variant="success" size="sm" onClick={() => toggleGameCompletion(props.name, true)}>Mark Complete</Button>
            }
            </div>
        </div>   
    )
}

export default Card;
