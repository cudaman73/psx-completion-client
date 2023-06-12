import React, {useState, useEffect} from "react";
import Card from "./Components/Card";
import { getCompletedGames, toggleGameCompletion } from "./utils";

function Completed() {

    const [gameList, setGameList] = useState([])

    useEffect(() => {
        getCompletedGames().then((data) => {
            setGameList(data);
        });
    }, [])

    function uncompleteGame(currentGame) {
        console.log("gameList length is " + gameList.length);
        toggleGameCompletion(currentGame, false).then(() => {
            const newGameList = gameList.filter(game => game.name !== currentGame);
            console.log("newGameList length is " + newGameList.length);
            setGameList(newGameList);
            });
    }

    return(
        <div>
            <div className="row">
                <h1>Completed Games</h1>
            </div>
            <div className="row mt-3 mx-1">
                {gameList.map((game) => (
                    <div className="col-md-4" key={game.id}>
                        <Card name={game.name} completed={game.completed} url={game.url} toggle={uncompleteGame}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Completed;