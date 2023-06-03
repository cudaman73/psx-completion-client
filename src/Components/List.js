import React from "react";


function List(props) {
    return (
        <ul>
            {props.games.map((game) => 
                (
                    <li>
                    <span style={{color: game.completed ? 'green' : 'red'}}>{game.name}</span>
                    </li>
                )
            )}
        </ul>
    )
}

export default List;