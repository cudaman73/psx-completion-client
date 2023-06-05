import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import { getUncompletedGames } from "./utils";

function Uncompleted() {

    const [gameList, setGameList] = useState([])

    useEffect(() => {
        getUncompletedGames().then((data) => {
            setGameList(data);
        });
    }, [])

    return(
        <div>
            <div className="row">
                <h1>Uncompleted Games</h1>
            </div>
            <div className="row mt-3 mx-1">
                {gameList.map((game) => (
                    <div className="col-md-4" key={game.id}>
                        <Card name={game.name} completed={game.completed} url={game.url}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Uncompleted;