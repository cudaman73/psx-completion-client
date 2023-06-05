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
        <div>
            <div className="row">
                <h1>Completed Games</h1>
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

export default Completed;