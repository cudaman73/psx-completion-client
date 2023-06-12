import React from "react";
import {Button} from "react-bootstrap";

function Card(props) {

    function toggleGame(gameName) {
        props.toggle(gameName);
    }


    return (
        <div className="card text-bg-primary mb-3">
            <h5 className="card-header">{props.name}</h5>
            <img loading="lazy" src={props.url} className="card-img-top py-2 px-2" alt="game cover thumbnail" />
            <div className="card-body">
            {
                props.completed === true ? 
                <Button variant="danger" size="sm" onClick={() => toggleGame(props.name)}>Mark Incomplete</Button> :
                <Button variant="success" size="sm" onClick={() => toggleGame(props.name)}>Mark Complete</Button>
            }
            </div>
        </div>   
    )
}

export default Card;
