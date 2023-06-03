import React, {useState, useEffect} from "react";
import Card from "./Components/Card";
import { getCompletedGames } from "./utils";

function Completed() {

    const [gameList, setGameList] = useState([])

    useEffect(() => {
        getCompletedGames().then((data) => {
            setGameList(data);
        });
    }, [])

    return(
        <div class="row">
                {gameList.map((game) => (
                    <div className="col-md-4" key={game.id}>
                        <Card name={game.name} completed={game.completed} />
                    </div>
                ))}
            </div>
    )
}

export default Completed;