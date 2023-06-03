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
            <div class="row mt-3">
                {gameList.map((game) => (
                    <div className="col-md-4 mx-auto" key={game.id}>
                        <Card name={game.name} completed={game.completed} url={game.url}/>
                    </div>
                ))}
            </div>
    )
}

export default Uncompleted;