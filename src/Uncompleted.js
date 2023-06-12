import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import { getUncompletedGames, toggleGameCompletion } from "./utils";

function Uncompleted() {

    const [gameList, setGameList] = useState([])

    useEffect(() => {
        getUncompletedGames().then((data) => {
            setGameList(data);
        });
    }, [])

    function completeGame(currentGame) {
        console.log("gameList length is " + gameList.length);
        toggleGameCompletion(currentGame, true).then(() => {
            const newGameList = gameList.filter(game => game.name !== currentGame);
            console.log("newGameList length is " + newGameList.length);
            setGameList(newGameList);
            });
    }

    return(
        <div>
            <div className="row">
                <h1>Uncompleted Games</h1>
            </div>
            <div className="row mt-3 mx-1">
                {gameList.map((game) => (
                    <div className="col-md-4" key={game.id}>
                        <Card name={game.name} completed={game.completed} url={game.url} toggle={completeGame}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Uncompleted;